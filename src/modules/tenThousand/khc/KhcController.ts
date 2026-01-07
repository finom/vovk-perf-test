import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khc")
export default class KhcController {
  @operation({
    summary: "Get Khc",
  })
  @get()
  static getKhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khc",
  })
  @post("{id}")
  static createKhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
