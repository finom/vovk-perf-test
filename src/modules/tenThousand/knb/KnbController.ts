import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knb")
export default class KnbController {
  @operation({
    summary: "Get Knb",
  })
  @get()
  static getKnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knb",
  })
  @post("{id}")
  static createKnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
