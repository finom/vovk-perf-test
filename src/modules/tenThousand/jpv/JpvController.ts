import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpv")
export default class JpvController {
  @operation({
    summary: "Get Jpv",
  })
  @get()
  static getJpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpv",
  })
  @post("{id}")
  static createJpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
