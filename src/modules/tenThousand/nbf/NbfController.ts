import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbf")
export default class NbfController {
  @operation({
    summary: "Get Nbf",
  })
  @get()
  static getNbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbf",
  })
  @post("{id}")
  static createNbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
