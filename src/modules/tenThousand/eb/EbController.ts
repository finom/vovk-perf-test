import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eb")
export default class EbController {
  @operation({
    summary: "Get Eb",
  })
  @get()
  static getEb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eb",
  })
  @post("{id}")
  static createEb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
