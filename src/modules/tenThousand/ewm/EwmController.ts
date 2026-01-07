import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewm")
export default class EwmController {
  @operation({
    summary: "Get Ewm",
  })
  @get()
  static getEwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewm",
  })
  @post("{id}")
  static createEwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
