import { procedure, prefix, get, post, operation } from "vovk";

@prefix("col")
export default class ColController {
  @operation({
    summary: "Get Col",
  })
  @get()
  static getCol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Col",
  })
  @post("{id}")
  static createCol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
