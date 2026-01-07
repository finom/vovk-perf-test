import { procedure, prefix, get, post, operation } from "vovk";

@prefix("et")
export default class EtController {
  @operation({
    summary: "Get Et",
  })
  @get()
  static getEt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Et",
  })
  @post("{id}")
  static createEt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
