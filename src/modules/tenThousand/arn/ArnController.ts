import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arn")
export default class ArnController {
  @operation({
    summary: "Get Arn",
  })
  @get()
  static getArn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arn",
  })
  @post("{id}")
  static createArn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
