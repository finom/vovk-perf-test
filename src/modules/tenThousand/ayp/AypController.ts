import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayp")
export default class AypController {
  @operation({
    summary: "Get Ayp",
  })
  @get()
  static getAyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayp",
  })
  @post("{id}")
  static createAyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
