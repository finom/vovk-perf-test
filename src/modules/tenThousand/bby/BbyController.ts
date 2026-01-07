import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bby")
export default class BbyController {
  @operation({
    summary: "Get Bby",
  })
  @get()
  static getBby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bby",
  })
  @post("{id}")
  static createBby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
