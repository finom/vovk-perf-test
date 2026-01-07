import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsl")
export default class NslController {
  @operation({
    summary: "Get Nsl",
  })
  @get()
  static getNsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsl",
  })
  @post("{id}")
  static createNsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
