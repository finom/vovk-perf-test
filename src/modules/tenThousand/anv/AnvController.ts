import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anv")
export default class AnvController {
  @operation({
    summary: "Get Anv",
  })
  @get()
  static getAnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anv",
  })
  @post("{id}")
  static createAnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
