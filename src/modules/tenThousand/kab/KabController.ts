import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kab")
export default class KabController {
  @operation({
    summary: "Get Kab",
  })
  @get()
  static getKab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kab",
  })
  @post("{id}")
  static createKab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
