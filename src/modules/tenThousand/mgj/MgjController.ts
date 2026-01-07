import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgj")
export default class MgjController {
  @operation({
    summary: "Get Mgj",
  })
  @get()
  static getMgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgj",
  })
  @post("{id}")
  static createMgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
