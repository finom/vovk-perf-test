import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lus")
export default class LusController {
  @operation({
    summary: "Get Lus",
  })
  @get()
  static getLus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lus",
  })
  @post("{id}")
  static createLus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
