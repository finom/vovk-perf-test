import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbw")
export default class NbwController {
  @operation({
    summary: "Get Nbw",
  })
  @get()
  static getNbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbw",
  })
  @post("{id}")
  static createNbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
