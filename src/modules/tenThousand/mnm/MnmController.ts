import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnm")
export default class MnmController {
  @operation({
    summary: "Get Mnm",
  })
  @get()
  static getMnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnm",
  })
  @post("{id}")
  static createMnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
