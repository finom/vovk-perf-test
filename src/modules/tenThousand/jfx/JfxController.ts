import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfx")
export default class JfxController {
  @operation({
    summary: "Get Jfx",
  })
  @get()
  static getJfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfx",
  })
  @post("{id}")
  static createJfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
