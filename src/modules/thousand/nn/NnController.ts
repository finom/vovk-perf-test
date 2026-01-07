import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nn")
export default class NnController {
  @operation({
    summary: "Get Nn",
  })
  @get()
  static getNn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nn",
  })
  @post("{id}")
  static createNn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
