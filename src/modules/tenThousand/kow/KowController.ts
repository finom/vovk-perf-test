import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kow")
export default class KowController {
  @operation({
    summary: "Get Kow",
  })
  @get()
  static getKow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kow",
  })
  @post("{id}")
  static createKow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
