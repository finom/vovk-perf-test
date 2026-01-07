import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crc")
export default class CrcController {
  @operation({
    summary: "Get Crc",
  })
  @get()
  static getCrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crc",
  })
  @post("{id}")
  static createCrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
