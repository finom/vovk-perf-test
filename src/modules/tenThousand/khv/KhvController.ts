import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khv")
export default class KhvController {
  @operation({
    summary: "Get Khv",
  })
  @get()
  static getKhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khv",
  })
  @post("{id}")
  static createKhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
