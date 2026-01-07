import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bg")
export default class BgController {
  @operation({
    summary: "Get Bg",
  })
  @get()
  static getBg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bg",
  })
  @post("{id}")
  static createBg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
