import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nep")
export default class NepController {
  @operation({
    summary: "Get Nep",
  })
  @get()
  static getNep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nep",
  })
  @post("{id}")
  static createNep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
