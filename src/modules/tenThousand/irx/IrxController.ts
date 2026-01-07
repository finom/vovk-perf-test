import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irx")
export default class IrxController {
  @operation({
    summary: "Get Irx",
  })
  @get()
  static getIrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irx",
  })
  @post("{id}")
  static createIrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
