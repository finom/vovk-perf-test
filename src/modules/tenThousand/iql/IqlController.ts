import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iql")
export default class IqlController {
  @operation({
    summary: "Get Iql",
  })
  @get()
  static getIql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iql",
  })
  @post("{id}")
  static createIql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
