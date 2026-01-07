import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivt")
export default class IvtController {
  @operation({
    summary: "Get Ivt",
  })
  @get()
  static getIvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivt",
  })
  @post("{id}")
  static createIvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
