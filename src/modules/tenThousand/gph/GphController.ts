import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gph")
export default class GphController {
  @operation({
    summary: "Get Gph",
  })
  @get()
  static getGph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gph",
  })
  @post("{id}")
  static createGph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
