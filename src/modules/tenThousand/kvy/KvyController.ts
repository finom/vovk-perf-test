import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvy")
export default class KvyController {
  @operation({
    summary: "Get Kvy",
  })
  @get()
  static getKvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvy",
  })
  @post("{id}")
  static createKvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
