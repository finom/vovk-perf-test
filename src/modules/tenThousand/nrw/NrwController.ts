import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrw")
export default class NrwController {
  @operation({
    summary: "Get Nrw",
  })
  @get()
  static getNrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrw",
  })
  @post("{id}")
  static createNrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
