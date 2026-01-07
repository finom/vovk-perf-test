import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iul")
export default class IulController {
  @operation({
    summary: "Get Iul",
  })
  @get()
  static getIul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iul",
  })
  @post("{id}")
  static createIul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
