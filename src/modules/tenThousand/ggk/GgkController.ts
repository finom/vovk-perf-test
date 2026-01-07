import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggk")
export default class GgkController {
  @operation({
    summary: "Get Ggk",
  })
  @get()
  static getGgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggk",
  })
  @post("{id}")
  static createGgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
