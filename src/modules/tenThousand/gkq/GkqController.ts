import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkq")
export default class GkqController {
  @operation({
    summary: "Get Gkq",
  })
  @get()
  static getGkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkq",
  })
  @post("{id}")
  static createGkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
