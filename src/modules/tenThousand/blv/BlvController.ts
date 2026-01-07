import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blv")
export default class BlvController {
  @operation({
    summary: "Get Blv",
  })
  @get()
  static getBlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blv",
  })
  @post("{id}")
  static createBlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
