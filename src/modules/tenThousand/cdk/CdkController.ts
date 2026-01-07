import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdk")
export default class CdkController {
  @operation({
    summary: "Get Cdk",
  })
  @get()
  static getCdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdk",
  })
  @post("{id}")
  static createCdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
