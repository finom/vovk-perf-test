import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbv")
export default class MbvController {
  @operation({
    summary: "Get Mbv",
  })
  @get()
  static getMbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbv",
  })
  @post("{id}")
  static createMbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
