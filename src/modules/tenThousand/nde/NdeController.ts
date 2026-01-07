import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nde")
export default class NdeController {
  @operation({
    summary: "Get Nde",
  })
  @get()
  static getNde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nde",
  })
  @post("{id}")
  static createNde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
