import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbv")
export default class NbvController {
  @operation({
    summary: "Get Nbv",
  })
  @get()
  static getNbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbv",
  })
  @post("{id}")
  static createNbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
