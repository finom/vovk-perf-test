import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrj")
export default class LrjController {
  @operation({
    summary: "Get Lrj",
  })
  @get()
  static getLrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrj",
  })
  @post("{id}")
  static createLrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
