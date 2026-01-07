import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khf")
export default class KhfController {
  @operation({
    summary: "Get Khf",
  })
  @get()
  static getKhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khf",
  })
  @post("{id}")
  static createKhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
