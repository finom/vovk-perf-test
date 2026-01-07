import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irm")
export default class IrmController {
  @operation({
    summary: "Get Irm",
  })
  @get()
  static getIrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irm",
  })
  @post("{id}")
  static createIrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
