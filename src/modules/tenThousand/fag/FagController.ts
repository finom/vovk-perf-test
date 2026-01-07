import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fag")
export default class FagController {
  @operation({
    summary: "Get Fag",
  })
  @get()
  static getFag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fag",
  })
  @post("{id}")
  static createFag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
