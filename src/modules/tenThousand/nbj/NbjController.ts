import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbj")
export default class NbjController {
  @operation({
    summary: "Get Nbj",
  })
  @get()
  static getNbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbj",
  })
  @post("{id}")
  static createNbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
