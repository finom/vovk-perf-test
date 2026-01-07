import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkb")
export default class JkbController {
  @operation({
    summary: "Get Jkb",
  })
  @get()
  static getJkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkb",
  })
  @post("{id}")
  static createJkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
