import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwx")
export default class LwxController {
  @operation({
    summary: "Get Lwx",
  })
  @get()
  static getLwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwx",
  })
  @post("{id}")
  static createLwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
