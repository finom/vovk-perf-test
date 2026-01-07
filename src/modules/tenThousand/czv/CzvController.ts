import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czv")
export default class CzvController {
  @operation({
    summary: "Get Czv",
  })
  @get()
  static getCzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czv",
  })
  @post("{id}")
  static createCzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
