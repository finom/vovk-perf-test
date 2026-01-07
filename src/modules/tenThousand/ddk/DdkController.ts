import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddk")
export default class DdkController {
  @operation({
    summary: "Get Ddk",
  })
  @get()
  static getDdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddk",
  })
  @post("{id}")
  static createDdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
