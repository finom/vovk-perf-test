import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkt")
export default class JktController {
  @operation({
    summary: "Get Jkt",
  })
  @get()
  static getJkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkt",
  })
  @post("{id}")
  static createJkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
