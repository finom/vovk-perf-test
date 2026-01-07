import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czl")
export default class CzlController {
  @operation({
    summary: "Get Czl",
  })
  @get()
  static getCzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czl",
  })
  @post("{id}")
  static createCzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
