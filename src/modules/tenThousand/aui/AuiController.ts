import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aui")
export default class AuiController {
  @operation({
    summary: "Get Aui",
  })
  @get()
  static getAui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aui",
  })
  @post("{id}")
  static createAui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
