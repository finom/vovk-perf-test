import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nql")
export default class NqlController {
  @operation({
    summary: "Get Nql",
  })
  @get()
  static getNql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nql",
  })
  @post("{id}")
  static createNql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
