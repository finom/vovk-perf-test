import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grc")
export default class GrcController {
  @operation({
    summary: "Get Grc",
  })
  @get()
  static getGrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grc",
  })
  @post("{id}")
  static createGrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
