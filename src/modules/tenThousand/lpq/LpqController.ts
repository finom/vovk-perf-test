import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpq")
export default class LpqController {
  @operation({
    summary: "Get Lpq",
  })
  @get()
  static getLpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpq",
  })
  @post("{id}")
  static createLpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
