import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gow")
export default class GowController {
  @operation({
    summary: "Get Gow",
  })
  @get()
  static getGow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gow",
  })
  @post("{id}")
  static createGow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
