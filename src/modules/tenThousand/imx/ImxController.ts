import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imx")
export default class ImxController {
  @operation({
    summary: "Get Imx",
  })
  @get()
  static getImx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imx",
  })
  @post("{id}")
  static createImx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
