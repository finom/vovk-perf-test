import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hex")
export default class HexController {
  @operation({
    summary: "Get Hex",
  })
  @get()
  static getHex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hex",
  })
  @post("{id}")
  static createHex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
