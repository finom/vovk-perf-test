import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cil")
export default class CilController {
  @operation({
    summary: "Get Cil",
  })
  @get()
  static getCil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cil",
  })
  @post("{id}")
  static createCil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
