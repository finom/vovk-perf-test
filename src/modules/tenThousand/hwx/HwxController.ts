import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwx")
export default class HwxController {
  @operation({
    summary: "Get Hwx",
  })
  @get()
  static getHwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwx",
  })
  @post("{id}")
  static createHwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
