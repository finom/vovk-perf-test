import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghi")
export default class GhiController {
  @operation({
    summary: "Get Ghi",
  })
  @get()
  static getGhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghi",
  })
  @post("{id}")
  static createGhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
