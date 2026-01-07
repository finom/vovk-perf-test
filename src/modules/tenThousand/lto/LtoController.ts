import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lto")
export default class LtoController {
  @operation({
    summary: "Get Lto",
  })
  @get()
  static getLto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lto",
  })
  @post("{id}")
  static createLto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
