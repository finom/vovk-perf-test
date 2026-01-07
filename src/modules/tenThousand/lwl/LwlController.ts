import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwl")
export default class LwlController {
  @operation({
    summary: "Get Lwl",
  })
  @get()
  static getLwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwl",
  })
  @post("{id}")
  static createLwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
