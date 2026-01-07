import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdr")
export default class MdrController {
  @operation({
    summary: "Get Mdr",
  })
  @get()
  static getMdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdr",
  })
  @post("{id}")
  static createMdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
