import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpt")
export default class BptController {
  @operation({
    summary: "Get Bpt",
  })
  @get()
  static getBpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpt",
  })
  @post("{id}")
  static createBpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
