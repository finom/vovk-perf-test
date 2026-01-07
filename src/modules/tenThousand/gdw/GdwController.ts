import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdw")
export default class GdwController {
  @operation({
    summary: "Get Gdw",
  })
  @get()
  static getGdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdw",
  })
  @post("{id}")
  static createGdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
