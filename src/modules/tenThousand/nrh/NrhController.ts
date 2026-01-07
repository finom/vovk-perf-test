import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrh")
export default class NrhController {
  @operation({
    summary: "Get Nrh",
  })
  @get()
  static getNrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrh",
  })
  @post("{id}")
  static createNrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
