import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndk")
export default class NdkController {
  @operation({
    summary: "Get Ndk",
  })
  @get()
  static getNdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndk",
  })
  @post("{id}")
  static createNdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
