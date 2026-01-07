import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwp")
export default class LwpController {
  @operation({
    summary: "Get Lwp",
  })
  @get()
  static getLwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwp",
  })
  @post("{id}")
  static createLwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
