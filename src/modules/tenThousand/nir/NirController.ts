import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nir")
export default class NirController {
  @operation({
    summary: "Get Nir",
  })
  @get()
  static getNir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nir",
  })
  @post("{id}")
  static createNir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
