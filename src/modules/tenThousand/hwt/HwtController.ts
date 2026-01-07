import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwt")
export default class HwtController {
  @operation({
    summary: "Get Hwt",
  })
  @get()
  static getHwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwt",
  })
  @post("{id}")
  static createHwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
