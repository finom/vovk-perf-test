import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fki")
export default class FkiController {
  @operation({
    summary: "Get Fki",
  })
  @get()
  static getFki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fki",
  })
  @post("{id}")
  static createFki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
