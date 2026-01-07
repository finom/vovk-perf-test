import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nos")
export default class NosController {
  @operation({
    summary: "Get Nos",
  })
  @get()
  static getNos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nos",
  })
  @post("{id}")
  static createNos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
