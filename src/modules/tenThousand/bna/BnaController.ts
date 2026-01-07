import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bna")
export default class BnaController {
  @operation({
    summary: "Get Bna",
  })
  @get()
  static getBna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bna",
  })
  @post("{id}")
  static createBna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
