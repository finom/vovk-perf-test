import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nee")
export default class NeeController {
  @operation({
    summary: "Get Nee",
  })
  @get()
  static getNee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nee",
  })
  @post("{id}")
  static createNee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
