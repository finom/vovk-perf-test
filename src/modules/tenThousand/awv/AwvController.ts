import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awv")
export default class AwvController {
  @operation({
    summary: "Get Awv",
  })
  @get()
  static getAwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awv",
  })
  @post("{id}")
  static createAwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
