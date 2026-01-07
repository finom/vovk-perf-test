import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esr")
export default class EsrController {
  @operation({
    summary: "Get Esr",
  })
  @get()
  static getEsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esr",
  })
  @post("{id}")
  static createEsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
