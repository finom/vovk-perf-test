import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwm")
export default class HwmController {
  @operation({
    summary: "Get Hwm",
  })
  @get()
  static getHwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwm",
  })
  @post("{id}")
  static createHwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
