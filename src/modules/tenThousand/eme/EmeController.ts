import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eme")
export default class EmeController {
  @operation({
    summary: "Get Eme",
  })
  @get()
  static getEme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eme",
  })
  @post("{id}")
  static createEme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
