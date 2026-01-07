import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksr")
export default class KsrController {
  @operation({
    summary: "Get Ksr",
  })
  @get()
  static getKsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksr",
  })
  @post("{id}")
  static createKsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
