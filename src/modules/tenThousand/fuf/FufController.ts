import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuf")
export default class FufController {
  @operation({
    summary: "Get Fuf",
  })
  @get()
  static getFuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuf",
  })
  @post("{id}")
  static createFuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
