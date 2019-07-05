import React from "react";

export type NodeId = string;

export interface Node  {
  id: NodeId;
  data: NodeData;
  ref: NodeRef;
  props: any;
}

export interface NodeData {
  props: any,
  type: string | React.ElementType;
  subtype?: string | React.ElementType,
  parent?: NodeId;
  closestParent?: NodeId;
  event: NodeEvent;
  _childCanvas?: Record<string, NodeId>
  nodes?: NodeId[]
}

export interface NodeRef {
  dom: HTMLElement;
  canDrag(node: Node): void;
  incoming?(incoming: Node): boolean;
  outgoing?(outgoing: Node): boolean;
}

export interface NodeEvent {
  active?: boolean;
  dragging?: boolean;
  hover?: boolean;
}

export type ReduceCompType = string | {
  resolvedName: string
}

export type ReducedComp = {
  type: ReduceCompType
  subtype?: ReduceCompType
  props: any
}

export type SerializedNodeData = Omit<NodeData, 'type' | 'subtype' | 'event'> & ReducedComp 

export type Nodes = Record<NodeId, Node>

export type ConnectedNode = {
  node: Node;
  connectTarget: Function,
  setProp: Function
} 

export type ResolverFunction = (name: string) => string | React.ElementType;
export type ResolverMap = Record<string, string | React.ElementType>;
export type Resolver = ResolverFunction | ResolverMap;