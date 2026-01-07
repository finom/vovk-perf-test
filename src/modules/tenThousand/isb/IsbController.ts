import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isb")
export default class IsbController {
  @operation({
    summary: "Get Isb",
  })
  @get()
  static getIsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isb",
  })
  @post("{id}")
  static createIsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
