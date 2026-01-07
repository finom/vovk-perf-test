import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cph")
export default class CphController {
  @operation({
    summary: "Get Cph",
  })
  @get()
  static getCph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cph",
  })
  @post("{id}")
  static createCph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
