import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khg")
export default class KhgController {
  @operation({
    summary: "Get Khg",
  })
  @get()
  static getKhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khg",
  })
  @post("{id}")
  static createKhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
