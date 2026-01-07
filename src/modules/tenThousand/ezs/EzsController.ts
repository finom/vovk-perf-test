import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezs")
export default class EzsController {
  @operation({
    summary: "Get Ezs",
  })
  @get()
  static getEzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezs",
  })
  @post("{id}")
  static createEzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
