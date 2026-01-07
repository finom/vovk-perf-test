import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsh")
export default class GshController {
  @operation({
    summary: "Get Gsh",
  })
  @get()
  static getGsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsh",
  })
  @post("{id}")
  static createGsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
