import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gto")
export default class GtoController {
  @operation({
    summary: "Get Gto",
  })
  @get()
  static getGto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gto",
  })
  @post("{id}")
  static createGto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
