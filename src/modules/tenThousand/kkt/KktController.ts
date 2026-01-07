import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkt")
export default class KktController {
  @operation({
    summary: "Get Kkt",
  })
  @get()
  static getKkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkt",
  })
  @post("{id}")
  static createKkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
