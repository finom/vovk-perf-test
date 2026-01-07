import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azs")
export default class AzsController {
  @operation({
    summary: "Get Azs",
  })
  @get()
  static getAzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azs",
  })
  @post("{id}")
  static createAzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
