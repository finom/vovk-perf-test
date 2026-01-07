import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxu")
export default class GxuController {
  @operation({
    summary: "Get Gxu",
  })
  @get()
  static getGxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxu",
  })
  @post("{id}")
  static createGxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
