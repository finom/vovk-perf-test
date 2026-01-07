import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nej")
export default class NejController {
  @operation({
    summary: "Get Nej",
  })
  @get()
  static getNej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nej",
  })
  @post("{id}")
  static createNej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
