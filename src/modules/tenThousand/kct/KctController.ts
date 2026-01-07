import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kct")
export default class KctController {
  @operation({
    summary: "Get Kct",
  })
  @get()
  static getKct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kct",
  })
  @post("{id}")
  static createKct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
