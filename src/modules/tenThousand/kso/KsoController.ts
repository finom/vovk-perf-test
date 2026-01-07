import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kso")
export default class KsoController {
  @operation({
    summary: "Get Kso",
  })
  @get()
  static getKso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kso",
  })
  @post("{id}")
  static createKso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
