import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khk")
export default class KhkController {
  @operation({
    summary: "Get Khk",
  })
  @get()
  static getKhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khk",
  })
  @post("{id}")
  static createKhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
