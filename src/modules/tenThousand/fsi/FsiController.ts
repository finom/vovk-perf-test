import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsi")
export default class FsiController {
  @operation({
    summary: "Get Fsi",
  })
  @get()
  static getFsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsi",
  })
  @post("{id}")
  static createFsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
