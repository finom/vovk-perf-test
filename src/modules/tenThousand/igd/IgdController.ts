import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igd")
export default class IgdController {
  @operation({
    summary: "Get Igd",
  })
  @get()
  static getIgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igd",
  })
  @post("{id}")
  static createIgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
