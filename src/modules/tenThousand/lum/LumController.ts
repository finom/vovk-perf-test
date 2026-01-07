import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lum")
export default class LumController {
  @operation({
    summary: "Get Lum",
  })
  @get()
  static getLum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lum",
  })
  @post("{id}")
  static createLum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
