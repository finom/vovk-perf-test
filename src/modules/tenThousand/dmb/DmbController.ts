import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmb")
export default class DmbController {
  @operation({
    summary: "Get Dmb",
  })
  @get()
  static getDmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmb",
  })
  @post("{id}")
  static createDmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
