import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwk")
export default class HwkController {
  @operation({
    summary: "Get Hwk",
  })
  @get()
  static getHwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwk",
  })
  @post("{id}")
  static createHwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
