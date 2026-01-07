import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jph")
export default class JphController {
  @operation({
    summary: "Get Jph",
  })
  @get()
  static getJph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jph",
  })
  @post("{id}")
  static createJph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
