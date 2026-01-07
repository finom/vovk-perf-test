import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gl")
export default class GlController {
  @operation({
    summary: "Get Gl",
  })
  @get()
  static getGl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gl",
  })
  @post("{id}")
  static createGl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
