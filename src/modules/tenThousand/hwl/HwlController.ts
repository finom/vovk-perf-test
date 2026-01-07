import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwl")
export default class HwlController {
  @operation({
    summary: "Get Hwl",
  })
  @get()
  static getHwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwl",
  })
  @post("{id}")
  static createHwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
