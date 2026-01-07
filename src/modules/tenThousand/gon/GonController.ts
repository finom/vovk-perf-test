import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gon")
export default class GonController {
  @operation({
    summary: "Get Gon",
  })
  @get()
  static getGon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gon",
  })
  @post("{id}")
  static createGon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
