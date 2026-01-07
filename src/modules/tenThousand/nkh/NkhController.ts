import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkh")
export default class NkhController {
  @operation({
    summary: "Get Nkh",
  })
  @get()
  static getNkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkh",
  })
  @post("{id}")
  static createNkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
