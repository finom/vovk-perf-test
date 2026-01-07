import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsf")
export default class LsfController {
  @operation({
    summary: "Get Lsf",
  })
  @get()
  static getLsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsf",
  })
  @post("{id}")
  static createLsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
