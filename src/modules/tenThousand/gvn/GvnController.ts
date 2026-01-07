import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvn")
export default class GvnController {
  @operation({
    summary: "Get Gvn",
  })
  @get()
  static getGvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvn",
  })
  @post("{id}")
  static createGvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
