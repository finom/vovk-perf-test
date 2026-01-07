import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abi")
export default class AbiController {
  @operation({
    summary: "Get Abi",
  })
  @get()
  static getAbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abi",
  })
  @post("{id}")
  static createAbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
