import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khm")
export default class KhmController {
  @operation({
    summary: "Get Khm",
  })
  @get()
  static getKhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khm",
  })
  @post("{id}")
  static createKhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
