import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lut")
export default class LutController {
  @operation({
    summary: "Get Lut",
  })
  @get()
  static getLut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lut",
  })
  @post("{id}")
  static createLut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
