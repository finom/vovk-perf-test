import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nse")
export default class NseController {
  @operation({
    summary: "Get Nse",
  })
  @get()
  static getNse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nse",
  })
  @post("{id}")
  static createNse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
