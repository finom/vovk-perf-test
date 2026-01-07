import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asr")
export default class AsrController {
  @operation({
    summary: "Get Asr",
  })
  @get()
  static getAsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asr",
  })
  @post("{id}")
  static createAsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
