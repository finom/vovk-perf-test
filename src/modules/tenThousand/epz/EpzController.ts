import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epz")
export default class EpzController {
  @operation({
    summary: "Get Epz",
  })
  @get()
  static getEpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epz",
  })
  @post("{id}")
  static createEpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
