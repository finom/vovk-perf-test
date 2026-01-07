import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpk")
export default class JpkController {
  @operation({
    summary: "Get Jpk",
  })
  @get()
  static getJpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpk",
  })
  @post("{id}")
  static createJpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
