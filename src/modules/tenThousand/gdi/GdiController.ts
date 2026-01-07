import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdi")
export default class GdiController {
  @operation({
    summary: "Get Gdi",
  })
  @get()
  static getGdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdi",
  })
  @post("{id}")
  static createGdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
