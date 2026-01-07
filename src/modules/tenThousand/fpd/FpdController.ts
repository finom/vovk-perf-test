import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpd")
export default class FpdController {
  @operation({
    summary: "Get Fpd",
  })
  @get()
  static getFpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpd",
  })
  @post("{id}")
  static createFpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
