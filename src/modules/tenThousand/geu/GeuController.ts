import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geu")
export default class GeuController {
  @operation({
    summary: "Get Geu",
  })
  @get()
  static getGeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Geu",
  })
  @post("{id}")
  static createGeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
