import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awq")
export default class AwqController {
  @operation({
    summary: "Get Awq",
  })
  @get()
  static getAwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awq",
  })
  @post("{id}")
  static createAwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
