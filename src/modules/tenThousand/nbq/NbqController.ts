import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbq")
export default class NbqController {
  @operation({
    summary: "Get Nbq",
  })
  @get()
  static getNbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbq",
  })
  @post("{id}")
  static createNbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
