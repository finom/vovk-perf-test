import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khw")
export default class KhwController {
  @operation({
    summary: "Get Khw",
  })
  @get()
  static getKhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khw",
  })
  @post("{id}")
  static createKhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
