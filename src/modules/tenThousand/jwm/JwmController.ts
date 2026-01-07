import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwm")
export default class JwmController {
  @operation({
    summary: "Get Jwm",
  })
  @get()
  static getJwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwm",
  })
  @post("{id}")
  static createJwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
