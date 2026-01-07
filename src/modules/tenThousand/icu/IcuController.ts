import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icu")
export default class IcuController {
  @operation({
    summary: "Get Icu",
  })
  @get()
  static getIcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icu",
  })
  @post("{id}")
  static createIcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
