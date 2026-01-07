import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lso")
export default class LsoController {
  @operation({
    summary: "Get Lso",
  })
  @get()
  static getLso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lso",
  })
  @post("{id}")
  static createLso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
