import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbh")
export default class NbhController {
  @operation({
    summary: "Get Nbh",
  })
  @get()
  static getNbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbh",
  })
  @post("{id}")
  static createNbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
