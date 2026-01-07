import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehm")
export default class EhmController {
  @operation({
    summary: "Get Ehm",
  })
  @get()
  static getEhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehm",
  })
  @post("{id}")
  static createEhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
