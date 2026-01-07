import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpc")
export default class GpcController {
  @operation({
    summary: "Get Gpc",
  })
  @get()
  static getGpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpc",
  })
  @post("{id}")
  static createGpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
