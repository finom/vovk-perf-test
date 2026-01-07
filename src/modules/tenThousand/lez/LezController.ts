import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lez")
export default class LezController {
  @operation({
    summary: "Get Lez",
  })
  @get()
  static getLez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lez",
  })
  @post("{id}")
  static createLez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
