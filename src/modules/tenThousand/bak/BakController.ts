import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bak")
export default class BakController {
  @operation({
    summary: "Get Bak",
  })
  @get()
  static getBak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bak",
  })
  @post("{id}")
  static createBak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
