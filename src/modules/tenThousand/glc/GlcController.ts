import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glc")
export default class GlcController {
  @operation({
    summary: "Get Glc",
  })
  @get()
  static getGlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glc",
  })
  @post("{id}")
  static createGlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
