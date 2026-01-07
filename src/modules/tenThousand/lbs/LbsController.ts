import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbs")
export default class LbsController {
  @operation({
    summary: "Get Lbs",
  })
  @get()
  static getLbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbs",
  })
  @post("{id}")
  static createLbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
