import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrq")
export default class NrqController {
  @operation({
    summary: "Get Nrq",
  })
  @get()
  static getNrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrq",
  })
  @post("{id}")
  static createNrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
