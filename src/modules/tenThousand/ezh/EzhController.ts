import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezh")
export default class EzhController {
  @operation({
    summary: "Get Ezh",
  })
  @get()
  static getEzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezh",
  })
  @post("{id}")
  static createEzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
