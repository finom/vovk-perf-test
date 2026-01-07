import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bit")
export default class BitController {
  @operation({
    summary: "Get Bit",
  })
  @get()
  static getBit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bit",
  })
  @post("{id}")
  static createBit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
