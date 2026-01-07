import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrm")
export default class NrmController {
  @operation({
    summary: "Get Nrm",
  })
  @get()
  static getNrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrm",
  })
  @post("{id}")
  static createNrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
