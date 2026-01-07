import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvp")
export default class GvpController {
  @operation({
    summary: "Get Gvp",
  })
  @get()
  static getGvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvp",
  })
  @post("{id}")
  static createGvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
