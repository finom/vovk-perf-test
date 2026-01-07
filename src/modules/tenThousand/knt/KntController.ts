import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knt")
export default class KntController {
  @operation({
    summary: "Get Knt",
  })
  @get()
  static getKnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knt",
  })
  @post("{id}")
  static createKnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
