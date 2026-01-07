import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpx")
export default class LpxController {
  @operation({
    summary: "Get Lpx",
  })
  @get()
  static getLpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpx",
  })
  @post("{id}")
  static createLpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
