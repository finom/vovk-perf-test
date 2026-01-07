import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghr")
export default class GhrController {
  @operation({
    summary: "Get Ghr",
  })
  @get()
  static getGhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghr",
  })
  @post("{id}")
  static createGhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
