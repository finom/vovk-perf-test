import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsz")
export default class GszController {
  @operation({
    summary: "Get Gsz",
  })
  @get()
  static getGsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsz",
  })
  @post("{id}")
  static createGsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
