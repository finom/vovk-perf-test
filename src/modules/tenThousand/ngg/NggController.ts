import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngg")
export default class NggController {
  @operation({
    summary: "Get Ngg",
  })
  @get()
  static getNgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngg",
  })
  @post("{id}")
  static createNgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
