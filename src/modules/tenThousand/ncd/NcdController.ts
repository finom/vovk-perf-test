import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncd")
export default class NcdController {
  @operation({
    summary: "Get Ncd",
  })
  @get()
  static getNcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncd",
  })
  @post("{id}")
  static createNcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
