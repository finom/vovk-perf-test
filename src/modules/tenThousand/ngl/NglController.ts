import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngl")
export default class NglController {
  @operation({
    summary: "Get Ngl",
  })
  @get()
  static getNgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngl",
  })
  @post("{id}")
  static createNgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
