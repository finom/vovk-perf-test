import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrk")
export default class NrkController {
  @operation({
    summary: "Get Nrk",
  })
  @get()
  static getNrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrk",
  })
  @post("{id}")
  static createNrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
