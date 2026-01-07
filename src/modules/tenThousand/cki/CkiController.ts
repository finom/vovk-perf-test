import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cki")
export default class CkiController {
  @operation({
    summary: "Get Cki",
  })
  @get()
  static getCki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cki",
  })
  @post("{id}")
  static createCki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
