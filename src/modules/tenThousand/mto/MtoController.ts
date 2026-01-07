import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mto")
export default class MtoController {
  @operation({
    summary: "Get Mto",
  })
  @get()
  static getMto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mto",
  })
  @post("{id}")
  static createMto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
