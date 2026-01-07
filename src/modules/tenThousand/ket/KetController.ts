import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ket")
export default class KetController {
  @operation({
    summary: "Get Ket",
  })
  @get()
  static getKet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ket",
  })
  @post("{id}")
  static createKet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
