import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ls")
export default class LsController {
  @operation({
    summary: "Get Ls",
  })
  @get()
  static getLs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ls",
  })
  @post("{id}")
  static createLs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
