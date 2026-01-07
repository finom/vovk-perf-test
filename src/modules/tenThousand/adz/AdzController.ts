import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adz")
export default class AdzController {
  @operation({
    summary: "Get Adz",
  })
  @get()
  static getAdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adz",
  })
  @post("{id}")
  static createAdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
