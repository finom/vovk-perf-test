import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gn")
export default class GnController {
  @operation({
    summary: "Get Gn",
  })
  @get()
  static getGn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gn",
  })
  @post("{id}")
  static createGn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
