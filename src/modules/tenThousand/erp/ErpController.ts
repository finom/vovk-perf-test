import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erp")
export default class ErpController {
  @operation({
    summary: "Get Erp",
  })
  @get()
  static getErp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erp",
  })
  @post("{id}")
  static createErp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
