import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpx")
export default class JpxController {
  @operation({
    summary: "Get Jpx",
  })
  @get()
  static getJpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpx",
  })
  @post("{id}")
  static createJpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
