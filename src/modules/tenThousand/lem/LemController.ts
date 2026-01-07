import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lem")
export default class LemController {
  @operation({
    summary: "Get Lem",
  })
  @get()
  static getLem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lem",
  })
  @post("{id}")
  static createLem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
