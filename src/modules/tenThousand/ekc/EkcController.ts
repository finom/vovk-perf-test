import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekc")
export default class EkcController {
  @operation({
    summary: "Get Ekc",
  })
  @get()
  static getEkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekc",
  })
  @post("{id}")
  static createEkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
