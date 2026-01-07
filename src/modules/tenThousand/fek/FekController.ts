import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fek")
export default class FekController {
  @operation({
    summary: "Get Fek",
  })
  @get()
  static getFek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fek",
  })
  @post("{id}")
  static createFek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
