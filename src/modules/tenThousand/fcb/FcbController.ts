import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcb")
export default class FcbController {
  @operation({
    summary: "Get Fcb",
  })
  @get()
  static getFcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcb",
  })
  @post("{id}")
  static createFcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
