import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icc")
export default class IccController {
  @operation({
    summary: "Get Icc",
  })
  @get()
  static getIcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icc",
  })
  @post("{id}")
  static createIcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
