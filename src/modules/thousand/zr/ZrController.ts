import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zr")
export default class ZrController {
  @operation({
    summary: "Get Zr",
  })
  @get()
  static getZr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zr",
  })
  @post("{id}")
  static createZr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
