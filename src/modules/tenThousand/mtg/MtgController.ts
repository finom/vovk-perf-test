import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtg")
export default class MtgController {
  @operation({
    summary: "Get Mtg",
  })
  @get()
  static getMtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtg",
  })
  @post("{id}")
  static createMtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
