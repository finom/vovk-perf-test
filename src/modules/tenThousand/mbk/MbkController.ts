import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbk")
export default class MbkController {
  @operation({
    summary: "Get Mbk",
  })
  @get()
  static getMbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbk",
  })
  @post("{id}")
  static createMbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
