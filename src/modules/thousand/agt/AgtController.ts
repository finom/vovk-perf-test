import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agt")
export default class AgtController {
  @operation({
    summary: "Get Agt",
  })
  @get()
  static getAgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agt",
  })
  @post("{id}")
  static createAgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
