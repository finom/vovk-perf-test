import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeu")
export default class AeuController {
  @operation({
    summary: "Get Aeu",
  })
  @get()
  static getAeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aeu",
  })
  @post("{id}")
  static createAeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
