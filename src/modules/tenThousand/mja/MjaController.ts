import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mja")
export default class MjaController {
  @operation({
    summary: "Get Mja",
  })
  @get()
  static getMja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mja",
  })
  @post("{id}")
  static createMja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
