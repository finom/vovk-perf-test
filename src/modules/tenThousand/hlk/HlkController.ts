import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlk")
export default class HlkController {
  @operation({
    summary: "Get Hlk",
  })
  @get()
  static getHlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlk",
  })
  @post("{id}")
  static createHlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
