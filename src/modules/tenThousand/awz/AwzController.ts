import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awz")
export default class AwzController {
  @operation({
    summary: "Get Awz",
  })
  @get()
  static getAwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awz",
  })
  @post("{id}")
  static createAwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
