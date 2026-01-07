import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlu")
export default class NluController {
  @operation({
    summary: "Get Nlu",
  })
  @get()
  static getNlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlu",
  })
  @post("{id}")
  static createNlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
