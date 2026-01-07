import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwk")
export default class MwkController {
  @operation({
    summary: "Get Mwk",
  })
  @get()
  static getMwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwk",
  })
  @post("{id}")
  static createMwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
