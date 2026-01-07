import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpk")
export default class KpkController {
  @operation({
    summary: "Get Kpk",
  })
  @get()
  static getKpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpk",
  })
  @post("{id}")
  static createKpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
