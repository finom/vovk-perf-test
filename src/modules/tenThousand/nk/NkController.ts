import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nk")
export default class NkController {
  @operation({
    summary: "Get Nk",
  })
  @get()
  static getNk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nk",
  })
  @post("{id}")
  static createNk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
