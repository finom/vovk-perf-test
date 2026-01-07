import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dce")
export default class DceController {
  @operation({
    summary: "Get Dce",
  })
  @get()
  static getDce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dce",
  })
  @post("{id}")
  static createDce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
