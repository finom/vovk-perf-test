import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndr")
export default class NdrController {
  @operation({
    summary: "Get Ndr",
  })
  @get()
  static getNdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndr",
  })
  @post("{id}")
  static createNdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
