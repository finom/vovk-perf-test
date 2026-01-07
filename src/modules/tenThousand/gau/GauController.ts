import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gau")
export default class GauController {
  @operation({
    summary: "Get Gau",
  })
  @get()
  static getGau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gau",
  })
  @post("{id}")
  static createGau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
