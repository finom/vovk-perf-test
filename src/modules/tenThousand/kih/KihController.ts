import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kih")
export default class KihController {
  @operation({
    summary: "Get Kih",
  })
  @get()
  static getKih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kih",
  })
  @post("{id}")
  static createKih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
