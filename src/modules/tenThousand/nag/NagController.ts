import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nag")
export default class NagController {
  @operation({
    summary: "Get Nag",
  })
  @get()
  static getNag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nag",
  })
  @post("{id}")
  static createNag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
