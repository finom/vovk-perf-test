import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esu")
export default class EsuController {
  @operation({
    summary: "Get Esu",
  })
  @get()
  static getEsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esu",
  })
  @post("{id}")
  static createEsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
