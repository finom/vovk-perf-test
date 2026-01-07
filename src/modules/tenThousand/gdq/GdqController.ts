import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdq")
export default class GdqController {
  @operation({
    summary: "Get Gdq",
  })
  @get()
  static getGdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdq",
  })
  @post("{id}")
  static createGdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
