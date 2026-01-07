import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guw")
export default class GuwController {
  @operation({
    summary: "Get Guw",
  })
  @get()
  static getGuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guw",
  })
  @post("{id}")
  static createGuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
