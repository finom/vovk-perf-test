import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nph")
export default class NphController {
  @operation({
    summary: "Get Nph",
  })
  @get()
  static getNph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nph",
  })
  @post("{id}")
  static createNph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
