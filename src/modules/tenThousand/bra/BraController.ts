import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bra")
export default class BraController {
  @operation({
    summary: "Get Bra",
  })
  @get()
  static getBra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bra",
  })
  @post("{id}")
  static createBra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
