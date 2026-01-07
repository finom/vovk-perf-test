import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nod")
export default class NodController {
  @operation({
    summary: "Get Nod",
  })
  @get()
  static getNod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nod",
  })
  @post("{id}")
  static createNod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
