import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldk")
export default class LdkController {
  @operation({
    summary: "Get Ldk",
  })
  @get()
  static getLdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldk",
  })
  @post("{id}")
  static createLdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
