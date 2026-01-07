import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mki")
export default class MkiController {
  @operation({
    summary: "Get Mki",
  })
  @get()
  static getMki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mki",
  })
  @post("{id}")
  static createMki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
