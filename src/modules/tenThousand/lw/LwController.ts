import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lw")
export default class LwController {
  @operation({
    summary: "Get Lw",
  })
  @get()
  static getLw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lw",
  })
  @post("{id}")
  static createLw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
