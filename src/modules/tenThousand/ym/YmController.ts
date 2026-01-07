import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ym")
export default class YmController {
  @operation({
    summary: "Get Ym",
  })
  @get()
  static getYm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ym",
  })
  @post("{id}")
  static createYm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
