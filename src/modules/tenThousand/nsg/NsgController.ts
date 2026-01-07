import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsg")
export default class NsgController {
  @operation({
    summary: "Get Nsg",
  })
  @get()
  static getNsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsg",
  })
  @post("{id}")
  static createNsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
