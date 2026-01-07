import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljv")
export default class LjvController {
  @operation({
    summary: "Get Ljv",
  })
  @get()
  static getLjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljv",
  })
  @post("{id}")
  static createLjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
