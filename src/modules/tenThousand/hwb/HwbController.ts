import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwb")
export default class HwbController {
  @operation({
    summary: "Get Hwb",
  })
  @get()
  static getHwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwb",
  })
  @post("{id}")
  static createHwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
