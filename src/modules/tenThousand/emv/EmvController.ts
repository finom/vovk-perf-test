import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emv")
export default class EmvController {
  @operation({
    summary: "Get Emv",
  })
  @get()
  static getEmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emv",
  })
  @post("{id}")
  static createEmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
