import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evy")
export default class EvyController {
  @operation({
    summary: "Get Evy",
  })
  @get()
  static getEvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evy",
  })
  @post("{id}")
  static createEvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
