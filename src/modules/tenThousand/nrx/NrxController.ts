import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrx")
export default class NrxController {
  @operation({
    summary: "Get Nrx",
  })
  @get()
  static getNrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrx",
  })
  @post("{id}")
  static createNrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
