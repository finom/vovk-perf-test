import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgn")
export default class KgnController {
  @operation({
    summary: "Get Kgn",
  })
  @get()
  static getKgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgn",
  })
  @post("{id}")
  static createKgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
