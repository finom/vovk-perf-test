import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mip")
export default class MipController {
  @operation({
    summary: "Get Mip",
  })
  @get()
  static getMip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mip",
  })
  @post("{id}")
  static createMip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
