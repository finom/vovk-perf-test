import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvx")
export default class GvxController {
  @operation({
    summary: "Get Gvx",
  })
  @get()
  static getGvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvx",
  })
  @post("{id}")
  static createGvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
