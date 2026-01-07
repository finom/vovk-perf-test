import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nti")
export default class NtiController {
  @operation({
    summary: "Get Nti",
  })
  @get()
  static getNti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nti",
  })
  @post("{id}")
  static createNti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
