import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwj")
export default class HwjController {
  @operation({
    summary: "Get Hwj",
  })
  @get()
  static getHwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwj",
  })
  @post("{id}")
  static createHwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
