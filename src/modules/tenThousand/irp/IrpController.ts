import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irp")
export default class IrpController {
  @operation({
    summary: "Get Irp",
  })
  @get()
  static getIrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irp",
  })
  @post("{id}")
  static createIrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
