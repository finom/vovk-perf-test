import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niz")
export default class NizController {
  @operation({
    summary: "Get Niz",
  })
  @get()
  static getNiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niz",
  })
  @post("{id}")
  static createNiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
