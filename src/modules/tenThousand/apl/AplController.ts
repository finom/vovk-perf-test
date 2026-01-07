import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apl")
export default class AplController {
  @operation({
    summary: "Get Apl",
  })
  @get()
  static getApl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apl",
  })
  @post("{id}")
  static createApl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
