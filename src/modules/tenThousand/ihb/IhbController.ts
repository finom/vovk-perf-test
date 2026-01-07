import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihb")
export default class IhbController {
  @operation({
    summary: "Get Ihb",
  })
  @get()
  static getIhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihb",
  })
  @post("{id}")
  static createIhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
