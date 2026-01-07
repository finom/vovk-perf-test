import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nng")
export default class NngController {
  @operation({
    summary: "Get Nng",
  })
  @get()
  static getNng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nng",
  })
  @post("{id}")
  static createNng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
