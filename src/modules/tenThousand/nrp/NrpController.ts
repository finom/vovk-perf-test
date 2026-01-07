import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrp")
export default class NrpController {
  @operation({
    summary: "Get Nrp",
  })
  @get()
  static getNrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrp",
  })
  @post("{id}")
  static createNrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
