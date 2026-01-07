import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwu")
export default class HwuController {
  @operation({
    summary: "Get Hwu",
  })
  @get()
  static getHwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwu",
  })
  @post("{id}")
  static createHwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
