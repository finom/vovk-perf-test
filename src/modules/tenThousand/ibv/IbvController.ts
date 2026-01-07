import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibv")
export default class IbvController {
  @operation({
    summary: "Get Ibv",
  })
  @get()
  static getIbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibv",
  })
  @post("{id}")
  static createIbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
