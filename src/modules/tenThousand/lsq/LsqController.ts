import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsq")
export default class LsqController {
  @operation({
    summary: "Get Lsq",
  })
  @get()
  static getLsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsq",
  })
  @post("{id}")
  static createLsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
