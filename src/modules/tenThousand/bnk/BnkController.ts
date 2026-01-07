import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnk")
export default class BnkController {
  @operation({
    summary: "Get Bnk",
  })
  @get()
  static getBnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnk",
  })
  @post("{id}")
  static createBnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
