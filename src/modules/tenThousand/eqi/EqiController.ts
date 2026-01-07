import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqi")
export default class EqiController {
  @operation({
    summary: "Get Eqi",
  })
  @get()
  static getEqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqi",
  })
  @post("{id}")
  static createEqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
