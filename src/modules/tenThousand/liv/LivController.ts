import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liv")
export default class LivController {
  @operation({
    summary: "Get Liv",
  })
  @get()
  static getLiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Liv",
  })
  @post("{id}")
  static createLiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
