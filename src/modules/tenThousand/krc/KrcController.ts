import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krc")
export default class KrcController {
  @operation({
    summary: "Get Krc",
  })
  @get()
  static getKrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krc",
  })
  @post("{id}")
  static createKrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
