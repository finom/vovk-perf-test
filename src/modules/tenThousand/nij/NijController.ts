import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nij")
export default class NijController {
  @operation({
    summary: "Get Nij",
  })
  @get()
  static getNij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nij",
  })
  @post("{id}")
  static createNij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
