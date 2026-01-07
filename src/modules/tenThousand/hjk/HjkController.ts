import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjk")
export default class HjkController {
  @operation({
    summary: "Get Hjk",
  })
  @get()
  static getHjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjk",
  })
  @post("{id}")
  static createHjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
