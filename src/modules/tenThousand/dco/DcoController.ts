import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dco")
export default class DcoController {
  @operation({
    summary: "Get Dco",
  })
  @get()
  static getDco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dco",
  })
  @post("{id}")
  static createDco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
