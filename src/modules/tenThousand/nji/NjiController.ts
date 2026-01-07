import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nji")
export default class NjiController {
  @operation({
    summary: "Get Nji",
  })
  @get()
  static getNji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nji",
  })
  @post("{id}")
  static createNji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
