import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mga")
export default class MgaController {
  @operation({
    summary: "Get Mga",
  })
  @get()
  static getMga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mga",
  })
  @post("{id}")
  static createMga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
