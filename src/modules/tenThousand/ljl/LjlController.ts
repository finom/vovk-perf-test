import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljl")
export default class LjlController {
  @operation({
    summary: "Get Ljl",
  })
  @get()
  static getLjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljl",
  })
  @post("{id}")
  static createLjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
