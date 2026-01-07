import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpk")
export default class MpkController {
  @operation({
    summary: "Get Mpk",
  })
  @get()
  static getMpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpk",
  })
  @post("{id}")
  static createMpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
