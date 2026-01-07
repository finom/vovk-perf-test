import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrv")
export default class NrvController {
  @operation({
    summary: "Get Nrv",
  })
  @get()
  static getNrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrv",
  })
  @post("{id}")
  static createNrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
