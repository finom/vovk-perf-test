import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdk")
export default class KdkController {
  @operation({
    summary: "Get Kdk",
  })
  @get()
  static getKdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdk",
  })
  @post("{id}")
  static createKdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
