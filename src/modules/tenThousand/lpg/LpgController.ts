import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpg")
export default class LpgController {
  @operation({
    summary: "Get Lpg",
  })
  @get()
  static getLpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpg",
  })
  @post("{id}")
  static createLpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
