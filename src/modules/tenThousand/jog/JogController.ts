import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jog")
export default class JogController {
  @operation({
    summary: "Get Jog",
  })
  @get()
  static getJog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jog",
  })
  @post("{id}")
  static createJog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
