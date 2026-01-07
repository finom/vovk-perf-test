import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nob")
export default class NobController {
  @operation({
    summary: "Get Nob",
  })
  @get()
  static getNob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nob",
  })
  @post("{id}")
  static createNob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
