import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khq")
export default class KhqController {
  @operation({
    summary: "Get Khq",
  })
  @get()
  static getKhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khq",
  })
  @post("{id}")
  static createKhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
