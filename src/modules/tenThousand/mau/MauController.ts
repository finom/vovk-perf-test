import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mau")
export default class MauController {
  @operation({
    summary: "Get Mau",
  })
  @get()
  static getMau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mau",
  })
  @post("{id}")
  static createMau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
