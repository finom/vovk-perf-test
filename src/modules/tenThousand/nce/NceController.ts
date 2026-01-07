import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nce")
export default class NceController {
  @operation({
    summary: "Get Nce",
  })
  @get()
  static getNce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nce",
  })
  @post("{id}")
  static createNce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
