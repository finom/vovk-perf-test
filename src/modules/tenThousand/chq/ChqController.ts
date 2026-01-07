import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chq")
export default class ChqController {
  @operation({
    summary: "Get Chq",
  })
  @get()
  static getChq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chq",
  })
  @post("{id}")
  static createChq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
