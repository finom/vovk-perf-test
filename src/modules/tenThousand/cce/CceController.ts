import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cce")
export default class CceController {
  @operation({
    summary: "Get Cce",
  })
  @get()
  static getCce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cce",
  })
  @post("{id}")
  static createCce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
