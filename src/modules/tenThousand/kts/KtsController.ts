import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kts")
export default class KtsController {
  @operation({
    summary: "Get Kts",
  })
  @get()
  static getKts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kts",
  })
  @post("{id}")
  static createKts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
