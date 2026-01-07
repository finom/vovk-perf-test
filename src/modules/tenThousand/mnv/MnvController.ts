import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnv")
export default class MnvController {
  @operation({
    summary: "Get Mnv",
  })
  @get()
  static getMnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnv",
  })
  @post("{id}")
  static createMnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
