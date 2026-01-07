import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcy")
export default class KcyController {
  @operation({
    summary: "Get Kcy",
  })
  @get()
  static getKcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcy",
  })
  @post("{id}")
  static createKcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
