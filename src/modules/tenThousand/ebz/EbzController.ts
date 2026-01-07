import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebz")
export default class EbzController {
  @operation({
    summary: "Get Ebz",
  })
  @get()
  static getEbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebz",
  })
  @post("{id}")
  static createEbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
