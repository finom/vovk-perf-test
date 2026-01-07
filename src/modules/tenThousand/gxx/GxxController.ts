import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxx")
export default class GxxController {
  @operation({
    summary: "Get Gxx",
  })
  @get()
  static getGxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxx",
  })
  @post("{id}")
  static createGxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
