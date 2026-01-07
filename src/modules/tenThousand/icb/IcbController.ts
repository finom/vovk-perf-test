import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icb")
export default class IcbController {
  @operation({
    summary: "Get Icb",
  })
  @get()
  static getIcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icb",
  })
  @post("{id}")
  static createIcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
