import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lch")
export default class LchController {
  @operation({
    summary: "Get Lch",
  })
  @get()
  static getLch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lch",
  })
  @post("{id}")
  static createLch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
