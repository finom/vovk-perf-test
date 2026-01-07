import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbm")
export default class NbmController {
  @operation({
    summary: "Get Nbm",
  })
  @get()
  static getNbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbm",
  })
  @post("{id}")
  static createNbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
