import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwm")
export default class DwmController {
  @operation({
    summary: "Get Dwm",
  })
  @get()
  static getDwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwm",
  })
  @post("{id}")
  static createDwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
