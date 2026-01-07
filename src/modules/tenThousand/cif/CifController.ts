import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cif")
export default class CifController {
  @operation({
    summary: "Get Cif",
  })
  @get()
  static getCif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cif",
  })
  @post("{id}")
  static createCif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
