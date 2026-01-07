import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgg")
export default class CggController {
  @operation({
    summary: "Get Cgg",
  })
  @get()
  static getCgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgg",
  })
  @post("{id}")
  static createCgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
