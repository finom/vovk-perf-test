import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sj")
export default class SjController {
  @operation({
    summary: "Get Sj",
  })
  @get()
  static getSj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sj",
  })
  @post("{id}")
  static createSj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
