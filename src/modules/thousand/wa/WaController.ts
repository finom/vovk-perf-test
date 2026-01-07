import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wa")
export default class WaController {
  @operation({
    summary: "Get Wa",
  })
  @get()
  static getWa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wa",
  })
  @post("{id}")
  static createWa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
