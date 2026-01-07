import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqr")
export default class NqrController {
  @operation({
    summary: "Get Nqr",
  })
  @get()
  static getNqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqr",
  })
  @post("{id}")
  static createNqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
