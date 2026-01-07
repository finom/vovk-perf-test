import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jea")
export default class JeaController {
  @operation({
    summary: "Get Jea",
  })
  @get()
  static getJea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jea",
  })
  @post("{id}")
  static createJea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
