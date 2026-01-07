import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpt")
export default class CptController {
  @operation({
    summary: "Get Cpt",
  })
  @get()
  static getCpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpt",
  })
  @post("{id}")
  static createCpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
