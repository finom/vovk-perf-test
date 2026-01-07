import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etn")
export default class EtnController {
  @operation({
    summary: "Get Etn",
  })
  @get()
  static getEtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etn",
  })
  @post("{id}")
  static createEtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
