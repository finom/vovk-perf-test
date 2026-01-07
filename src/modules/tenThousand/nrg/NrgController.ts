import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrg")
export default class NrgController {
  @operation({
    summary: "Get Nrg",
  })
  @get()
  static getNrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrg",
  })
  @post("{id}")
  static createNrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
