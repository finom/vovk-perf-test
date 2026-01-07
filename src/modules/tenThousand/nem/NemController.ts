import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nem")
export default class NemController {
  @operation({
    summary: "Get Nem",
  })
  @get()
  static getNem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nem",
  })
  @post("{id}")
  static createNem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
