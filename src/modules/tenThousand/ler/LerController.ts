import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ler")
export default class LerController {
  @operation({
    summary: "Get Ler",
  })
  @get()
  static getLer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ler",
  })
  @post("{id}")
  static createLer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
