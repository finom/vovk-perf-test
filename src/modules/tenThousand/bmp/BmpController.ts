import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmp")
export default class BmpController {
  @operation({
    summary: "Get Bmp",
  })
  @get()
  static getBmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmp",
  })
  @post("{id}")
  static createBmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
