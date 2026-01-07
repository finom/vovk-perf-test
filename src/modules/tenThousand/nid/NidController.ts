import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nid")
export default class NidController {
  @operation({
    summary: "Get Nid",
  })
  @get()
  static getNid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nid",
  })
  @post("{id}")
  static createNid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
