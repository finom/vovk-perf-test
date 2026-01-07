import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcx")
export default class LcxController {
  @operation({
    summary: "Get Lcx",
  })
  @get()
  static getLcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcx",
  })
  @post("{id}")
  static createLcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
