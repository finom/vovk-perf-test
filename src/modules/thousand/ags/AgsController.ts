import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ags")
export default class AgsController {
  @operation({
    summary: "Get Ags",
  })
  @get()
  static getAgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ags",
  })
  @post("{id}")
  static createAgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
