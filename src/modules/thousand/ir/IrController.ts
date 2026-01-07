import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ir")
export default class IrController {
  @operation({
    summary: "Get Ir",
  })
  @get()
  static getIr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ir",
  })
  @post("{id}")
  static createIr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
