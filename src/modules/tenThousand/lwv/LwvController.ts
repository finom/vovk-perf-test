import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwv")
export default class LwvController {
  @operation({
    summary: "Get Lwv",
  })
  @get()
  static getLwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwv",
  })
  @post("{id}")
  static createLwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
