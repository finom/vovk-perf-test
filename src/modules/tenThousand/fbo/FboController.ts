import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbo")
export default class FboController {
  @operation({
    summary: "Get Fbo",
  })
  @get()
  static getFbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbo",
  })
  @post("{id}")
  static createFbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
