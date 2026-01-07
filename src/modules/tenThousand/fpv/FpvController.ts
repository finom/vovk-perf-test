import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpv")
export default class FpvController {
  @operation({
    summary: "Get Fpv",
  })
  @get()
  static getFpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpv",
  })
  @post("{id}")
  static createFpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
