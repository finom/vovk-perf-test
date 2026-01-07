import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awp")
export default class AwpController {
  @operation({
    summary: "Get Awp",
  })
  @get()
  static getAwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awp",
  })
  @post("{id}")
  static createAwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
