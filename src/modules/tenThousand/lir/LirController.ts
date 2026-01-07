import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lir")
export default class LirController {
  @operation({
    summary: "Get Lir",
  })
  @get()
  static getLir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lir",
  })
  @post("{id}")
  static createLir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
