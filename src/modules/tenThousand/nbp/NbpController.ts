import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbp")
export default class NbpController {
  @operation({
    summary: "Get Nbp",
  })
  @get()
  static getNbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbp",
  })
  @post("{id}")
  static createNbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
