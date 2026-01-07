import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbk")
export default class NbkController {
  @operation({
    summary: "Get Nbk",
  })
  @get()
  static getNbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbk",
  })
  @post("{id}")
  static createNbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
