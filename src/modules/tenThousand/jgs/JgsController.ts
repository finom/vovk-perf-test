import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgs")
export default class JgsController {
  @operation({
    summary: "Get Jgs",
  })
  @get()
  static getJgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgs",
  })
  @post("{id}")
  static createJgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
