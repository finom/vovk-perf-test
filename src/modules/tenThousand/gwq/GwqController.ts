import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwq")
export default class GwqController {
  @operation({
    summary: "Get Gwq",
  })
  @get()
  static getGwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwq",
  })
  @post("{id}")
  static createGwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
