import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glo")
export default class GloController {
  @operation({
    summary: "Get Glo",
  })
  @get()
  static getGlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glo",
  })
  @post("{id}")
  static createGlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
