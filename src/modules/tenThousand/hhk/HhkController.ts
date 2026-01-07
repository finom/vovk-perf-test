import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhk")
export default class HhkController {
  @operation({
    summary: "Get Hhk",
  })
  @get()
  static getHhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhk",
  })
  @post("{id}")
  static createHhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
