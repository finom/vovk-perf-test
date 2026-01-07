import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lki")
export default class LkiController {
  @operation({
    summary: "Get Lki",
  })
  @get()
  static getLki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lki",
  })
  @post("{id}")
  static createLki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
