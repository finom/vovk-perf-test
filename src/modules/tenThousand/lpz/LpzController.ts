import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpz")
export default class LpzController {
  @operation({
    summary: "Get Lpz",
  })
  @get()
  static getLpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpz",
  })
  @post("{id}")
  static createLpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
