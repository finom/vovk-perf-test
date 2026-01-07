import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hli")
export default class HliController {
  @operation({
    summary: "Get Hli",
  })
  @get()
  static getHli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hli",
  })
  @post("{id}")
  static createHli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
