import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irj")
export default class IrjController {
  @operation({
    summary: "Get Irj",
  })
  @get()
  static getIrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irj",
  })
  @post("{id}")
  static createIrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
