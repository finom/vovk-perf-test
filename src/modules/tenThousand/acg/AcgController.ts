import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acg")
export default class AcgController {
  @operation({
    summary: "Get Acg",
  })
  @get()
  static getAcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acg",
  })
  @post("{id}")
  static createAcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
