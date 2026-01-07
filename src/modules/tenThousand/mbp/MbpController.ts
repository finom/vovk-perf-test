import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbp")
export default class MbpController {
  @operation({
    summary: "Get Mbp",
  })
  @get()
  static getMbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbp",
  })
  @post("{id}")
  static createMbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
