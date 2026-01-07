import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awg")
export default class AwgController {
  @operation({
    summary: "Get Awg",
  })
  @get()
  static getAwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awg",
  })
  @post("{id}")
  static createAwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
