import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfh")
export default class KfhController {
  @operation({
    summary: "Get Kfh",
  })
  @get()
  static getKfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfh",
  })
  @post("{id}")
  static createKfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
