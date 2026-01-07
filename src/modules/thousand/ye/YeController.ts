import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ye")
export default class YeController {
  @operation({
    summary: "Get Ye",
  })
  @get()
  static getYe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ye",
  })
  @post("{id}")
  static createYe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
