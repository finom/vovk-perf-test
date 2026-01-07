import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jji")
export default class JjiController {
  @operation({
    summary: "Get Jji",
  })
  @get()
  static getJji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jji",
  })
  @post("{id}")
  static createJji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
