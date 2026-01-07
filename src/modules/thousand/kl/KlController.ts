import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kl")
export default class KlController {
  @operation({
    summary: "Get Kl",
  })
  @get()
  static getKl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kl",
  })
  @post("{id}")
  static createKl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
