import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpt")
export default class KptController {
  @operation({
    summary: "Get Kpt",
  })
  @get()
  static getKpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpt",
  })
  @post("{id}")
  static createKpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
