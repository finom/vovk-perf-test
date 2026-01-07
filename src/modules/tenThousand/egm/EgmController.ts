import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egm")
export default class EgmController {
  @operation({
    summary: "Get Egm",
  })
  @get()
  static getEgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egm",
  })
  @post("{id}")
  static createEgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
