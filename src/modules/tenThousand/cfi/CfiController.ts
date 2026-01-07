import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfi")
export default class CfiController {
  @operation({
    summary: "Get Cfi",
  })
  @get()
  static getCfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfi",
  })
  @post("{id}")
  static createCfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
