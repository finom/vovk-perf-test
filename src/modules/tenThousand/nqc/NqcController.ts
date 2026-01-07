import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqc")
export default class NqcController {
  @operation({
    summary: "Get Nqc",
  })
  @get()
  static getNqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqc",
  })
  @post("{id}")
  static createNqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
