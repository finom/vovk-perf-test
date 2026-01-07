import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nv")
export default class NvController {
  @operation({
    summary: "Get Nv",
  })
  @get()
  static getNv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nv",
  })
  @post("{id}")
  static createNv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
