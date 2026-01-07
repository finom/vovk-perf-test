import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfa")
export default class GfaController {
  @operation({
    summary: "Get Gfa",
  })
  @get()
  static getGfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfa",
  })
  @post("{id}")
  static createGfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
