import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmk")
export default class HmkController {
  @operation({
    summary: "Get Hmk",
  })
  @get()
  static getHmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmk",
  })
  @post("{id}")
  static createHmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
