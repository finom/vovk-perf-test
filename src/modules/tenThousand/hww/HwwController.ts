import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hww")
export default class HwwController {
  @operation({
    summary: "Get Hww",
  })
  @get()
  static getHww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hww",
  })
  @post("{id}")
  static createHww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
