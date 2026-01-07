import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mti")
export default class MtiController {
  @operation({
    summary: "Get Mti",
  })
  @get()
  static getMti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mti",
  })
  @post("{id}")
  static createMti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
