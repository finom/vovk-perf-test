import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hk")
export default class HkController {
  @operation({
    summary: "Get Hk",
  })
  @get()
  static getHk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hk",
  })
  @post("{id}")
  static createHk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
