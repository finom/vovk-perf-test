import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awm")
export default class AwmController {
  @operation({
    summary: "Get Awm",
  })
  @get()
  static getAwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awm",
  })
  @post("{id}")
  static createAwm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
