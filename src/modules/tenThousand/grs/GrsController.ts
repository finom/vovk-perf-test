import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grs")
export default class GrsController {
  @operation({
    summary: "Get Grs",
  })
  @get()
  static getGrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grs",
  })
  @post("{id}")
  static createGrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
