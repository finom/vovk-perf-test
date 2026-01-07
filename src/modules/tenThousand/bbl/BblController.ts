import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbl")
export default class BblController {
  @operation({
    summary: "Get Bbl",
  })
  @get()
  static getBbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbl",
  })
  @post("{id}")
  static createBbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
