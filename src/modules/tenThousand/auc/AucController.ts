import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auc")
export default class AucController {
  @operation({
    summary: "Get Auc",
  })
  @get()
  static getAuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auc",
  })
  @post("{id}")
  static createAuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
