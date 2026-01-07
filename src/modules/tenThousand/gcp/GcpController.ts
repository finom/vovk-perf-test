import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcp")
export default class GcpController {
  @operation({
    summary: "Get Gcp",
  })
  @get()
  static getGcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcp",
  })
  @post("{id}")
  static createGcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
