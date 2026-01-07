import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etw")
export default class EtwController {
  @operation({
    summary: "Get Etw",
  })
  @get()
  static getEtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etw",
  })
  @post("{id}")
  static createEtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
