import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwq")
export default class HwqController {
  @operation({
    summary: "Get Hwq",
  })
  @get()
  static getHwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwq",
  })
  @post("{id}")
  static createHwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
