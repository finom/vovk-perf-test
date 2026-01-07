import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mez")
export default class MezController {
  @operation({
    summary: "Get Mez",
  })
  @get()
  static getMez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mez",
  })
  @post("{id}")
  static createMez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
