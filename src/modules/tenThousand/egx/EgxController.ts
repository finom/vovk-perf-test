import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egx")
export default class EgxController {
  @operation({
    summary: "Get Egx",
  })
  @get()
  static getEgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egx",
  })
  @post("{id}")
  static createEgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
