import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ess")
export default class EssController {
  @operation({
    summary: "Get Ess",
  })
  @get()
  static getEss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ess",
  })
  @post("{id}")
  static createEss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
