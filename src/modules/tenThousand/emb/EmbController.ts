import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emb")
export default class EmbController {
  @operation({
    summary: "Get Emb",
  })
  @get()
  static getEmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emb",
  })
  @post("{id}")
  static createEmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
