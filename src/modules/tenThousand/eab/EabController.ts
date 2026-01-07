import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eab")
export default class EabController {
  @operation({
    summary: "Get Eab",
  })
  @get()
  static getEab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eab",
  })
  @post("{id}")
  static createEab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
