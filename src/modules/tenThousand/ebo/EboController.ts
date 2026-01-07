import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebo")
export default class EboController {
  @operation({
    summary: "Get Ebo",
  })
  @get()
  static getEbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebo",
  })
  @post("{id}")
  static createEbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
