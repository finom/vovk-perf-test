import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcc")
export default class MccController {
  @operation({
    summary: "Get Mcc",
  })
  @get()
  static getMcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcc",
  })
  @post("{id}")
  static createMcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
