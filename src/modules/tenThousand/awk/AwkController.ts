import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awk")
export default class AwkController {
  @operation({
    summary: "Get Awk",
  })
  @get()
  static getAwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awk",
  })
  @post("{id}")
  static createAwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
