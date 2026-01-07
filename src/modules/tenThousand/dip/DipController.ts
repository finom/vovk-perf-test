import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dip")
export default class DipController {
  @operation({
    summary: "Get Dip",
  })
  @get()
  static getDip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dip",
  })
  @post("{id}")
  static createDip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
