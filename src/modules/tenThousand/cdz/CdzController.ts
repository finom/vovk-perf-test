import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdz")
export default class CdzController {
  @operation({
    summary: "Get Cdz",
  })
  @get()
  static getCdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdz",
  })
  @post("{id}")
  static createCdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
