import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neu")
export default class NeuController {
  @operation({
    summary: "Get Neu",
  })
  @get()
  static getNeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Neu",
  })
  @post("{id}")
  static createNeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
