import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aww")
export default class AwwController {
  @operation({
    summary: "Get Aww",
  })
  @get()
  static getAww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aww",
  })
  @post("{id}")
  static createAww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
