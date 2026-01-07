import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nha")
export default class NhaController {
  @operation({
    summary: "Get Nha",
  })
  @get()
  static getNha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nha",
  })
  @post("{id}")
  static createNha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
