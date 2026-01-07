import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmi")
export default class NmiController {
  @operation({
    summary: "Get Nmi",
  })
  @get()
  static getNmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmi",
  })
  @post("{id}")
  static createNmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
