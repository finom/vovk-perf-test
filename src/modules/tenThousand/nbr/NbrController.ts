import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbr")
export default class NbrController {
  @operation({
    summary: "Get Nbr",
  })
  @get()
  static getNbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbr",
  })
  @post("{id}")
  static createNbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
