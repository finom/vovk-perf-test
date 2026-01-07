import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kho")
export default class KhoController {
  @operation({
    summary: "Get Kho",
  })
  @get()
  static getKho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kho",
  })
  @post("{id}")
  static createKho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
