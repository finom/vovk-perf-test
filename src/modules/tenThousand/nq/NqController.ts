import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nq")
export default class NqController {
  @operation({
    summary: "Get Nq",
  })
  @get()
  static getNq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nq",
  })
  @post("{id}")
  static createNq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
