import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfw")
export default class KfwController {
  @operation({
    summary: "Get Kfw",
  })
  @get()
  static getKfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfw",
  })
  @post("{id}")
  static createKfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
