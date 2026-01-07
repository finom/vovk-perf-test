import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khp")
export default class KhpController {
  @operation({
    summary: "Get Khp",
  })
  @get()
  static getKhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khp",
  })
  @post("{id}")
  static createKhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
