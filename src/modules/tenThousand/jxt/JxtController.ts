import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxt")
export default class JxtController {
  @operation({
    summary: "Get Jxt",
  })
  @get()
  static getJxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxt",
  })
  @post("{id}")
  static createJxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
