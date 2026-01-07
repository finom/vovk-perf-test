import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnj")
export default class MnjController {
  @operation({
    summary: "Get Mnj",
  })
  @get()
  static getMnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnj",
  })
  @post("{id}")
  static createMnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
