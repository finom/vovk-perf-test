import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgj")
export default class KgjController {
  @operation({
    summary: "Get Kgj",
  })
  @get()
  static getKgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgj",
  })
  @post("{id}")
  static createKgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
