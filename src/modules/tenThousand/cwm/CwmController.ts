import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwm")
export default class CwmController {
  @operation({
    summary: "Get Cwm",
  })
  @get()
  static getCwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwm",
  })
  @post("{id}")
  static createCwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
