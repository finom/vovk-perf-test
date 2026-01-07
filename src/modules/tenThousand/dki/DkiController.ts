import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dki")
export default class DkiController {
  @operation({
    summary: "Get Dki",
  })
  @get()
  static getDki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dki",
  })
  @post("{id}")
  static createDki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
