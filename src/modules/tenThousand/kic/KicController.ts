import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kic")
export default class KicController {
  @operation({
    summary: "Get Kic",
  })
  @get()
  static getKic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kic",
  })
  @post("{id}")
  static createKic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
