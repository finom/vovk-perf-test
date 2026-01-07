import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egp")
export default class EgpController {
  @operation({
    summary: "Get Egp",
  })
  @get()
  static getEgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egp",
  })
  @post("{id}")
  static createEgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
