import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ata")
export default class AtaController {
  @operation({
    summary: "Get Ata",
  })
  @get()
  static getAta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ata",
  })
  @post("{id}")
  static createAta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
