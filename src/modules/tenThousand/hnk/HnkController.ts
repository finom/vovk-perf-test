import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnk")
export default class HnkController {
  @operation({
    summary: "Get Hnk",
  })
  @get()
  static getHnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnk",
  })
  @post("{id}")
  static createHnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
