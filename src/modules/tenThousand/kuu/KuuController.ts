import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuu")
export default class KuuController {
  @operation({
    summary: "Get Kuu",
  })
  @get()
  static getKuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuu",
  })
  @post("{id}")
  static createKuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
