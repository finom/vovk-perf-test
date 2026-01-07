import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irn")
export default class IrnController {
  @operation({
    summary: "Get Irn",
  })
  @get()
  static getIrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irn",
  })
  @post("{id}")
  static createIrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
