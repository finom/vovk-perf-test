import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwb")
export default class GwbController {
  @operation({
    summary: "Get Gwb",
  })
  @get()
  static getGwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwb",
  })
  @post("{id}")
  static createGwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
