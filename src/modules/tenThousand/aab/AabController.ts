import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aab")
export default class AabController {
  @operation({
    summary: "Get Aab",
  })
  @get()
  static getAab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aab",
  })
  @post("{id}")
  static createAab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
