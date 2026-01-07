import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwz")
export default class HwzController {
  @operation({
    summary: "Get Hwz",
  })
  @get()
  static getHwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwz",
  })
  @post("{id}")
  static createHwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
