import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bki")
export default class BkiController {
  @operation({
    summary: "Get Bki",
  })
  @get()
  static getBki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bki",
  })
  @post("{id}")
  static createBki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
