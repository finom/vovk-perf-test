import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndd")
export default class NddController {
  @operation({
    summary: "Get Ndd",
  })
  @get()
  static getNdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndd",
  })
  @post("{id}")
  static createNdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
