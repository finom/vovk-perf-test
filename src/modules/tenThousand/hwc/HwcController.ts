import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwc")
export default class HwcController {
  @operation({
    summary: "Get Hwc",
  })
  @get()
  static getHwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwc",
  })
  @post("{id}")
  static createHwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
