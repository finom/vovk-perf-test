import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnb")
export default class MnbController {
  @operation({
    summary: "Get Mnb",
  })
  @get()
  static getMnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnb",
  })
  @post("{id}")
  static createMnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
