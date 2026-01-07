import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbe")
export default class NbeController {
  @operation({
    summary: "Get Nbe",
  })
  @get()
  static getNbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbe",
  })
  @post("{id}")
  static createNbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
