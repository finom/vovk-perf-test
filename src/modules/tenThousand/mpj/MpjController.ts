import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpj")
export default class MpjController {
  @operation({
    summary: "Get Mpj",
  })
  @get()
  static getMpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpj",
  })
  @post("{id}")
  static createMpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
