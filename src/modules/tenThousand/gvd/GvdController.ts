import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvd")
export default class GvdController {
  @operation({
    summary: "Get Gvd",
  })
  @get()
  static getGvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvd",
  })
  @post("{id}")
  static createGvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
