import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwg")
export default class HwgController {
  @operation({
    summary: "Get Hwg",
  })
  @get()
  static getHwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwg",
  })
  @post("{id}")
  static createHwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
