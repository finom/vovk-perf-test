import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lns")
export default class LnsController {
  @operation({
    summary: "Get Lns",
  })
  @get()
  static getLns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lns",
  })
  @post("{id}")
  static createLns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
