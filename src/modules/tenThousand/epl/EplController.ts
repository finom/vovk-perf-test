import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epl")
export default class EplController {
  @operation({
    summary: "Get Epl",
  })
  @get()
  static getEpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epl",
  })
  @post("{id}")
  static createEpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
