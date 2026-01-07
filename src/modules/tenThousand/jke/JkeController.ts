import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jke")
export default class JkeController {
  @operation({
    summary: "Get Jke",
  })
  @get()
  static getJke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jke",
  })
  @post("{id}")
  static createJke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
