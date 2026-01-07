import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnv")
export default class GnvController {
  @operation({
    summary: "Get Gnv",
  })
  @get()
  static getGnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnv",
  })
  @post("{id}")
  static createGnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
