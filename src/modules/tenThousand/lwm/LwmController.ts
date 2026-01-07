import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwm")
export default class LwmController {
  @operation({
    summary: "Get Lwm",
  })
  @get()
  static getLwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwm",
  })
  @post("{id}")
  static createLwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
