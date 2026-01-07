import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvq")
export default class GvqController {
  @operation({
    summary: "Get Gvq",
  })
  @get()
  static getGvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvq",
  })
  @post("{id}")
  static createGvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
