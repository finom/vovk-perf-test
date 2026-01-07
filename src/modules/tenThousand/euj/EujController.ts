import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euj")
export default class EujController {
  @operation({
    summary: "Get Euj",
  })
  @get()
  static getEuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euj",
  })
  @post("{id}")
  static createEuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
