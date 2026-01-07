import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njs")
export default class NjsController {
  @operation({
    summary: "Get Njs",
  })
  @get()
  static getNjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njs",
  })
  @post("{id}")
  static createNjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
