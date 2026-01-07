import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egd")
export default class EgdController {
  @operation({
    summary: "Get Egd",
  })
  @get()
  static getEgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egd",
  })
  @post("{id}")
  static createEgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
