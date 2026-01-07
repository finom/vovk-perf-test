import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdk")
export default class BdkController {
  @operation({
    summary: "Get Bdk",
  })
  @get()
  static getBdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdk",
  })
  @post("{id}")
  static createBdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
