import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyw")
export default class EywController {
  @operation({
    summary: "Get Eyw",
  })
  @get()
  static getEyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyw",
  })
  @post("{id}")
  static createEyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
