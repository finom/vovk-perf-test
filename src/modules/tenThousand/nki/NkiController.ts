import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nki")
export default class NkiController {
  @operation({
    summary: "Get Nki",
  })
  @get()
  static getNki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nki",
  })
  @post("{id}")
  static createNki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
