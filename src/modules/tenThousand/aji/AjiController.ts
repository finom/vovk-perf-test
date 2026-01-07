import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aji")
export default class AjiController {
  @operation({
    summary: "Get Aji",
  })
  @get()
  static getAji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aji",
  })
  @post("{id}")
  static createAji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
