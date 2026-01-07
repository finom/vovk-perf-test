import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awc")
export default class AwcController {
  @operation({
    summary: "Get Awc",
  })
  @get()
  static getAwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awc",
  })
  @post("{id}")
  static createAwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
