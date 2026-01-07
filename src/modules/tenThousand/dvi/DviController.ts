import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvi")
export default class DviController {
  @operation({
    summary: "Get Dvi",
  })
  @get()
  static getDvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvi",
  })
  @post("{id}")
  static createDvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
