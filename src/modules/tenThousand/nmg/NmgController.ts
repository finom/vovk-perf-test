import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmg")
export default class NmgController {
  @operation({
    summary: "Get Nmg",
  })
  @get()
  static getNmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmg",
  })
  @post("{id}")
  static createNmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
