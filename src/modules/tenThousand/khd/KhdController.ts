import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khd")
export default class KhdController {
  @operation({
    summary: "Get Khd",
  })
  @get()
  static getKhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khd",
  })
  @post("{id}")
  static createKhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
