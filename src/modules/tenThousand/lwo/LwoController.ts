import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwo")
export default class LwoController {
  @operation({
    summary: "Get Lwo",
  })
  @get()
  static getLwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwo",
  })
  @post("{id}")
  static createLwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
