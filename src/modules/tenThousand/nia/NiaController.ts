import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nia")
export default class NiaController {
  @operation({
    summary: "Get Nia",
  })
  @get()
  static getNia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nia",
  })
  @post("{id}")
  static createNia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
