import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwm")
export default class KwmController {
  @operation({
    summary: "Get Kwm",
  })
  @get()
  static getKwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwm",
  })
  @post("{id}")
  static createKwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
