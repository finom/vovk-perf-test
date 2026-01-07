import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crm")
export default class CrmController {
  @operation({
    summary: "Get Crm",
  })
  @get()
  static getCrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crm",
  })
  @post("{id}")
  static createCrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
