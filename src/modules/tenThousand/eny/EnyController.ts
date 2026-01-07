import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eny")
export default class EnyController {
  @operation({
    summary: "Get Eny",
  })
  @get()
  static getEny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eny",
  })
  @post("{id}")
  static createEny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
