import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvl")
export default class JvlController {
  @operation({
    summary: "Get Jvl",
  })
  @get()
  static getJvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvl",
  })
  @post("{id}")
  static createJvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
