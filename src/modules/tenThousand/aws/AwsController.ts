import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aws")
export default class AwsController {
  @operation({
    summary: "Get Aws",
  })
  @get()
  static getAws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aws",
  })
  @post("{id}")
  static createAws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
