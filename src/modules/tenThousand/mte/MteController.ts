import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mte")
export default class MteController {
  @operation({
    summary: "Get Mte",
  })
  @get()
  static getMte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mte",
  })
  @post("{id}")
  static createMte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
