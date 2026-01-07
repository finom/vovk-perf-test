import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfi")
export default class NfiController {
  @operation({
    summary: "Get Nfi",
  })
  @get()
  static getNfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfi",
  })
  @post("{id}")
  static createNfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
