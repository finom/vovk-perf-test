import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbl")
export default class GblController {
  @operation({
    summary: "Get Gbl",
  })
  @get()
  static getGbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbl",
  })
  @post("{id}")
  static createGbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
