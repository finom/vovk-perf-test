import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwp")
export default class HwpController {
  @operation({
    summary: "Get Hwp",
  })
  @get()
  static getHwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwp",
  })
  @post("{id}")
  static createHwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
