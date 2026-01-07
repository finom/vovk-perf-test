import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fto")
export default class FtoController {
  @operation({
    summary: "Get Fto",
  })
  @get()
  static getFto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fto",
  })
  @post("{id}")
  static createFto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
