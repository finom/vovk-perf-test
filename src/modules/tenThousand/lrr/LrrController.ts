import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrr")
export default class LrrController {
  @operation({
    summary: "Get Lrr",
  })
  @get()
  static getLrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrr",
  })
  @post("{id}")
  static createLrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
