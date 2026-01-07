import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glf")
export default class GlfController {
  @operation({
    summary: "Get Glf",
  })
  @get()
  static getGlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glf",
  })
  @post("{id}")
  static createGlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
