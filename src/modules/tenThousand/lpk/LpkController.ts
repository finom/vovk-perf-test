import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpk")
export default class LpkController {
  @operation({
    summary: "Get Lpk",
  })
  @get()
  static getLpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpk",
  })
  @post("{id}")
  static createLpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
