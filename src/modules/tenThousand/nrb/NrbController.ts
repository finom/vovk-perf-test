import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrb")
export default class NrbController {
  @operation({
    summary: "Get Nrb",
  })
  @get()
  static getNrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrb",
  })
  @post("{id}")
  static createNrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
