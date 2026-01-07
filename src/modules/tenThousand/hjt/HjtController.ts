import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjt")
export default class HjtController {
  @operation({
    summary: "Get Hjt",
  })
  @get()
  static getHjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjt",
  })
  @post("{id}")
  static createHjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
