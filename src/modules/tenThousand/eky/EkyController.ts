import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eky")
export default class EkyController {
  @operation({
    summary: "Get Eky",
  })
  @get()
  static getEky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eky",
  })
  @post("{id}")
  static createEky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
