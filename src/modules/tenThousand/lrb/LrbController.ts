import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrb")
export default class LrbController {
  @operation({
    summary: "Get Lrb",
  })
  @get()
  static getLrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrb",
  })
  @post("{id}")
  static createLrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
