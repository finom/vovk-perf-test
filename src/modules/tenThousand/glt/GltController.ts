import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glt")
export default class GltController {
  @operation({
    summary: "Get Glt",
  })
  @get()
  static getGlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glt",
  })
  @post("{id}")
  static createGlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
