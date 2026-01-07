import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lks")
export default class LksController {
  @operation({
    summary: "Get Lks",
  })
  @get()
  static getLks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lks",
  })
  @post("{id}")
  static createLks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
