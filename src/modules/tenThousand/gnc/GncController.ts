import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnc")
export default class GncController {
  @operation({
    summary: "Get Gnc",
  })
  @get()
  static getGnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnc",
  })
  @post("{id}")
  static createGnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
