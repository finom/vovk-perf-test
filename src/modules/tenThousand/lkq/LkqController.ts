import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkq")
export default class LkqController {
  @operation({
    summary: "Get Lkq",
  })
  @get()
  static getLkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkq",
  })
  @post("{id}")
  static createLkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
