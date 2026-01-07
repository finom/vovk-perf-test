import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gom")
export default class GomController {
  @operation({
    summary: "Get Gom",
  })
  @get()
  static getGom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gom",
  })
  @post("{id}")
  static createGom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
