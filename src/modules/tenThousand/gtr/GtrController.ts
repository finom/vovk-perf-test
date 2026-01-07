import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtr")
export default class GtrController {
  @operation({
    summary: "Get Gtr",
  })
  @get()
  static getGtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtr",
  })
  @post("{id}")
  static createGtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
