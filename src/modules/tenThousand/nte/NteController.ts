import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nte")
export default class NteController {
  @operation({
    summary: "Get Nte",
  })
  @get()
  static getNte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nte",
  })
  @post("{id}")
  static createNte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
