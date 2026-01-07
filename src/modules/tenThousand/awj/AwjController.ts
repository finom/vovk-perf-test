import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awj")
export default class AwjController {
  @operation({
    summary: "Get Awj",
  })
  @get()
  static getAwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awj",
  })
  @post("{id}")
  static createAwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
