import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keg")
export default class KegController {
  @operation({
    summary: "Get Keg",
  })
  @get()
  static getKeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Keg",
  })
  @post("{id}")
  static createKeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
