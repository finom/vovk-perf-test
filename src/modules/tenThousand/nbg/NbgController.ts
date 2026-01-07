import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbg")
export default class NbgController {
  @operation({
    summary: "Get Nbg",
  })
  @get()
  static getNbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbg",
  })
  @post("{id}")
  static createNbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
