import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cps")
export default class CpsController {
  @operation({
    summary: "Get Cps",
  })
  @get()
  static getCps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cps",
  })
  @post("{id}")
  static createCps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
