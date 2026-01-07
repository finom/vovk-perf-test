import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mif")
export default class MifController {
  @operation({
    summary: "Get Mif",
  })
  @get()
  static getMif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mif",
  })
  @post("{id}")
  static createMif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
