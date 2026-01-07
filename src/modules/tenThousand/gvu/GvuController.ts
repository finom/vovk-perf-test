import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvu")
export default class GvuController {
  @operation({
    summary: "Get Gvu",
  })
  @get()
  static getGvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvu",
  })
  @post("{id}")
  static createGvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
