import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltn")
export default class LtnController {
  @operation({
    summary: "Get Ltn",
  })
  @get()
  static getLtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltn",
  })
  @post("{id}")
  static createLtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
