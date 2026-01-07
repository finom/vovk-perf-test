import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khe")
export default class KheController {
  @operation({
    summary: "Get Khe",
  })
  @get()
  static getKhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khe",
  })
  @post("{id}")
  static createKhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
