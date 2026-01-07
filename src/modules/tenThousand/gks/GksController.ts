import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gks")
export default class GksController {
  @operation({
    summary: "Get Gks",
  })
  @get()
  static getGks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gks",
  })
  @post("{id}")
  static createGks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
