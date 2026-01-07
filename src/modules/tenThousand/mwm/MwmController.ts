import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwm")
export default class MwmController {
  @operation({
    summary: "Get Mwm",
  })
  @get()
  static getMwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwm",
  })
  @post("{id}")
  static createMwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
