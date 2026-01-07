import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awf")
export default class AwfController {
  @operation({
    summary: "Get Awf",
  })
  @get()
  static getAwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awf",
  })
  @post("{id}")
  static createAwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
