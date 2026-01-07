import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cha")
export default class ChaController {
  @operation({
    summary: "Get Cha",
  })
  @get()
  static getCha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cha",
  })
  @post("{id}")
  static createCha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
