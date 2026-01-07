import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiu")
export default class AiuController {
  @operation({
    summary: "Get Aiu",
  })
  @get()
  static getAiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiu",
  })
  @post("{id}")
  static createAiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
