import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kll")
export default class KllController {
  @operation({
    summary: "Get Kll",
  })
  @get()
  static getKll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kll",
  })
  @post("{id}")
  static createKll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
