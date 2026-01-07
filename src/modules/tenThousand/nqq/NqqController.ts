import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqq")
export default class NqqController {
  @operation({
    summary: "Get Nqq",
  })
  @get()
  static getNqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqq",
  })
  @post("{id}")
  static createNqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
