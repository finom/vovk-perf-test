import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrj")
export default class NrjController {
  @operation({
    summary: "Get Nrj",
  })
  @get()
  static getNrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrj",
  })
  @post("{id}")
  static createNrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
