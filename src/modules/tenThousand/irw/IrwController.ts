import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irw")
export default class IrwController {
  @operation({
    summary: "Get Irw",
  })
  @get()
  static getIrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irw",
  })
  @post("{id}")
  static createIrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
