import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbg")
export default class MbgController {
  @operation({
    summary: "Get Mbg",
  })
  @get()
  static getMbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbg",
  })
  @post("{id}")
  static createMbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
