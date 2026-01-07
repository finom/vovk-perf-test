import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgk")
export default class HgkController {
  @operation({
    summary: "Get Hgk",
  })
  @get()
  static getHgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgk",
  })
  @post("{id}")
  static createHgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
