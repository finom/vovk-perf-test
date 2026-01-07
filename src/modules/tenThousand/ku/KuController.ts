import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ku")
export default class KuController {
  @operation({
    summary: "Get Ku",
  })
  @get()
  static getKu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ku",
  })
  @post("{id}")
  static createKu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
