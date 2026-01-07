import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khb")
export default class KhbController {
  @operation({
    summary: "Get Khb",
  })
  @get()
  static getKhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khb",
  })
  @post("{id}")
  static createKhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
