import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrl")
export default class MrlController {
  @operation({
    summary: "Get Mrl",
  })
  @get()
  static getMrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrl",
  })
  @post("{id}")
  static createMrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
