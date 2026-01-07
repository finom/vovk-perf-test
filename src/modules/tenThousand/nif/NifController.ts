import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nif")
export default class NifController {
  @operation({
    summary: "Get Nif",
  })
  @get()
  static getNif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nif",
  })
  @post("{id}")
  static createNif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
