import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwm")
export default class GwmController {
  @operation({
    summary: "Get Gwm",
  })
  @get()
  static getGwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwm",
  })
  @post("{id}")
  static createGwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
