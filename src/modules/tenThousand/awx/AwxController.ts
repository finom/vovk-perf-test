import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awx")
export default class AwxController {
  @operation({
    summary: "Get Awx",
  })
  @get()
  static getAwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awx",
  })
  @post("{id}")
  static createAwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
