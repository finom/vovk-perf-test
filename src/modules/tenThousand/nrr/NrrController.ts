import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrr")
export default class NrrController {
  @operation({
    summary: "Get Nrr",
  })
  @get()
  static getNrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrr",
  })
  @post("{id}")
  static createNrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
