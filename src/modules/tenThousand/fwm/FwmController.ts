import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwm")
export default class FwmController {
  @operation({
    summary: "Get Fwm",
  })
  @get()
  static getFwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwm",
  })
  @post("{id}")
  static createFwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
