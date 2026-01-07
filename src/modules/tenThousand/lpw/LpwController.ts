import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpw")
export default class LpwController {
  @operation({
    summary: "Get Lpw",
  })
  @get()
  static getLpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpw",
  })
  @post("{id}")
  static createLpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
