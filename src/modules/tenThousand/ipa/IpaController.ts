import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipa")
export default class IpaController {
  @operation({
    summary: "Get Ipa",
  })
  @get()
  static getIpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipa",
  })
  @post("{id}")
  static createIpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
