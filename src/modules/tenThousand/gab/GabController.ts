import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gab")
export default class GabController {
  @operation({
    summary: "Get Gab",
  })
  @get()
  static getGab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gab",
  })
  @post("{id}")
  static createGab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
