import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehr")
export default class EhrController {
  @operation({
    summary: "Get Ehr",
  })
  @get()
  static getEhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehr",
  })
  @post("{id}")
  static createEhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
