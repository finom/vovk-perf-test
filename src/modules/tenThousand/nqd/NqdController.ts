import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqd")
export default class NqdController {
  @operation({
    summary: "Get Nqd",
  })
  @get()
  static getNqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqd",
  })
  @post("{id}")
  static createNqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
