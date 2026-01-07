import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrz")
export default class NrzController {
  @operation({
    summary: "Get Nrz",
  })
  @get()
  static getNrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrz",
  })
  @post("{id}")
  static createNrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
