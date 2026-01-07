import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noj")
export default class NojController {
  @operation({
    summary: "Get Noj",
  })
  @get()
  static getNoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noj",
  })
  @post("{id}")
  static createNoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
