import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsq")
export default class HsqController {
  @operation({
    summary: "Get Hsq",
  })
  @get()
  static getHsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsq",
  })
  @post("{id}")
  static createHsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
