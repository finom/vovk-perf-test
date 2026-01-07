import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgg")
export default class BggController {
  @operation({
    summary: "Get Bgg",
  })
  @get()
  static getBgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgg",
  })
  @post("{id}")
  static createBgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
