import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khx")
export default class KhxController {
  @operation({
    summary: "Get Khx",
  })
  @get()
  static getKhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khx",
  })
  @post("{id}")
  static createKhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
