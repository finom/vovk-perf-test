import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwm")
export default class IwmController {
  @operation({
    summary: "Get Iwm",
  })
  @get()
  static getIwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwm",
  })
  @post("{id}")
  static createIwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
