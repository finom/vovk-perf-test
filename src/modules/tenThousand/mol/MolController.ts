import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mol")
export default class MolController {
  @operation({
    summary: "Get Mol",
  })
  @get()
  static getMol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mol",
  })
  @post("{id}")
  static createMol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
