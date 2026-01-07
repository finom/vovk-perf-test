import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msi")
export default class MsiController {
  @operation({
    summary: "Get Msi",
  })
  @get()
  static getMsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msi",
  })
  @post("{id}")
  static createMsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
