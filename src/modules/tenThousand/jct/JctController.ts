import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jct")
export default class JctController {
  @operation({
    summary: "Get Jct",
  })
  @get()
  static getJct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jct",
  })
  @post("{id}")
  static createJct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
