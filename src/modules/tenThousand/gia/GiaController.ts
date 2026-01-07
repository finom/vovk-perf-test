import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gia")
export default class GiaController {
  @operation({
    summary: "Get Gia",
  })
  @get()
  static getGia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gia",
  })
  @post("{id}")
  static createGia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
