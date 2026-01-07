import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcl")
export default class DclController {
  @operation({
    summary: "Get Dcl",
  })
  @get()
  static getDcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcl",
  })
  @post("{id}")
  static createDcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
