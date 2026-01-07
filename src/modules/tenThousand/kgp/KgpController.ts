import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgp")
export default class KgpController {
  @operation({
    summary: "Get Kgp",
  })
  @get()
  static getKgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgp",
  })
  @post("{id}")
  static createKgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
