import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kna")
export default class KnaController {
  @operation({
    summary: "Get Kna",
  })
  @get()
  static getKna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kna",
  })
  @post("{id}")
  static createKna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
