import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evm")
export default class EvmController {
  @operation({
    summary: "Get Evm",
  })
  @get()
  static getEvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evm",
  })
  @post("{id}")
  static createEvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
