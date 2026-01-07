import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqh")
export default class NqhController {
  @operation({
    summary: "Get Nqh",
  })
  @get()
  static getNqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqh",
  })
  @post("{id}")
  static createNqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
