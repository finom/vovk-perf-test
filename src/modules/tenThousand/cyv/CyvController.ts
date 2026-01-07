import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyv")
export default class CyvController {
  @operation({
    summary: "Get Cyv",
  })
  @get()
  static getCyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyv",
  })
  @post("{id}")
  static createCyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
