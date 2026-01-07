import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyl")
export default class GylController {
  @operation({
    summary: "Get Gyl",
  })
  @get()
  static getGyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyl",
  })
  @post("{id}")
  static createGyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
