import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsi")
export default class GsiController {
  @operation({
    summary: "Get Gsi",
  })
  @get()
  static getGsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsi",
  })
  @post("{id}")
  static createGsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
