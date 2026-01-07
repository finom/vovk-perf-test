import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efc")
export default class EfcController {
  @operation({
    summary: "Get Efc",
  })
  @get()
  static getEfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efc",
  })
  @post("{id}")
  static createEfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
