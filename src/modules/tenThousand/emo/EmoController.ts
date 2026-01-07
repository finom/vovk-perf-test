import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emo")
export default class EmoController {
  @operation({
    summary: "Get Emo",
  })
  @get()
  static getEmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emo",
  })
  @post("{id}")
  static createEmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
