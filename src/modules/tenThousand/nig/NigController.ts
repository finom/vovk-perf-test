import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nig")
export default class NigController {
  @operation({
    summary: "Get Nig",
  })
  @get()
  static getNig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nig",
  })
  @post("{id}")
  static createNig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
