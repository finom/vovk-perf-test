import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwf")
export default class HwfController {
  @operation({
    summary: "Get Hwf",
  })
  @get()
  static getHwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwf",
  })
  @post("{id}")
  static createHwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
