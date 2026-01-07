import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfz")
export default class KfzController {
  @operation({
    summary: "Get Kfz",
  })
  @get()
  static getKfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfz",
  })
  @post("{id}")
  static createKfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
