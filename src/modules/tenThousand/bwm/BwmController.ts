import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwm")
export default class BwmController {
  @operation({
    summary: "Get Bwm",
  })
  @get()
  static getBwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwm",
  })
  @post("{id}")
  static createBwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
