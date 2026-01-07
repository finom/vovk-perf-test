import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kf")
export default class KfController {
  @operation({
    summary: "Get Kf",
  })
  @get()
  static getKf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kf",
  })
  @post("{id}")
  static createKf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
