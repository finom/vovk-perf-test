import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbz")
export default class NbzController {
  @operation({
    summary: "Get Nbz",
  })
  @get()
  static getNbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbz",
  })
  @post("{id}")
  static createNbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
