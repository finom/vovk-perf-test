import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgn")
export default class HgnController {
  @operation({
    summary: "Get Hgn",
  })
  @get()
  static getHgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgn",
  })
  @post("{id}")
  static createHgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
