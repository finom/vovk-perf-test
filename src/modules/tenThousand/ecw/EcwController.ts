import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecw")
export default class EcwController {
  @operation({
    summary: "Get Ecw",
  })
  @get()
  static getEcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecw",
  })
  @post("{id}")
  static createEcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
