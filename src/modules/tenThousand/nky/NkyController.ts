import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nky")
export default class NkyController {
  @operation({
    summary: "Get Nky",
  })
  @get()
  static getNky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nky",
  })
  @post("{id}")
  static createNky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
