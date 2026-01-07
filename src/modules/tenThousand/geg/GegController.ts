import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geg")
export default class GegController {
  @operation({
    summary: "Get Geg",
  })
  @get()
  static getGeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Geg",
  })
  @post("{id}")
  static createGeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
