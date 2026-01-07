import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afz")
export default class AfzController {
  @operation({
    summary: "Get Afz",
  })
  @get()
  static getAfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afz",
  })
  @post("{id}")
  static createAfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
