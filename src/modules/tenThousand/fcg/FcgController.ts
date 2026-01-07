import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcg")
export default class FcgController {
  @operation({
    summary: "Get Fcg",
  })
  @get()
  static getFcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcg",
  })
  @post("{id}")
  static createFcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
