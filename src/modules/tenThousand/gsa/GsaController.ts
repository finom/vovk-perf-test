import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsa")
export default class GsaController {
  @operation({
    summary: "Get Gsa",
  })
  @get()
  static getGsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsa",
  })
  @post("{id}")
  static createGsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
