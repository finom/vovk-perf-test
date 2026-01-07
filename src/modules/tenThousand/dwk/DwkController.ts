import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwk")
export default class DwkController {
  @operation({
    summary: "Get Dwk",
  })
  @get()
  static getDwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwk",
  })
  @post("{id}")
  static createDwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
