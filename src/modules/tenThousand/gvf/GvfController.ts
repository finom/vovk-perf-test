import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvf")
export default class GvfController {
  @operation({
    summary: "Get Gvf",
  })
  @get()
  static getGvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvf",
  })
  @post("{id}")
  static createGvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
