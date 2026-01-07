import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrl")
export default class NrlController {
  @operation({
    summary: "Get Nrl",
  })
  @get()
  static getNrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrl",
  })
  @post("{id}")
  static createNrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
