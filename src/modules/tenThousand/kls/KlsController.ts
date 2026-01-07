import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kls")
export default class KlsController {
  @operation({
    summary: "Get Kls",
  })
  @get()
  static getKls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kls",
  })
  @post("{id}")
  static createKls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
