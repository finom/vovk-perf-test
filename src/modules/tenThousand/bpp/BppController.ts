import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpp")
export default class BppController {
  @operation({
    summary: "Get Bpp",
  })
  @get()
  static getBpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpp",
  })
  @post("{id}")
  static createBpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
