import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abb")
export default class AbbController {
  @operation({
    summary: "Get Abb",
  })
  @get()
  static getAbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abb",
  })
  @post("{id}")
  static createAbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
