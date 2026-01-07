import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apa")
export default class ApaController {
  @operation({
    summary: "Get Apa",
  })
  @get()
  static getApa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apa",
  })
  @post("{id}")
  static createApa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
