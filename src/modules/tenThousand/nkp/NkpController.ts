import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkp")
export default class NkpController {
  @operation({
    summary: "Get Nkp",
  })
  @get()
  static getNkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkp",
  })
  @post("{id}")
  static createNkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
