import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrn")
export default class NrnController {
  @operation({
    summary: "Get Nrn",
  })
  @get()
  static getNrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrn",
  })
  @post("{id}")
  static createNrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
