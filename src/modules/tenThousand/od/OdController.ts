import { procedure, prefix, get, post, operation } from "vovk";

@prefix("od")
export default class OdController {
  @operation({
    summary: "Get Od",
  })
  @get()
  static getOd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Od",
  })
  @post("{id}")
  static createOd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
