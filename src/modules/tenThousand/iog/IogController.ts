import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iog")
export default class IogController {
  @operation({
    summary: "Get Iog",
  })
  @get()
  static getIog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iog",
  })
  @post("{id}")
  static createIog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
