import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luc")
export default class LucController {
  @operation({
    summary: "Get Luc",
  })
  @get()
  static getLuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luc",
  })
  @post("{id}")
  static createLuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
