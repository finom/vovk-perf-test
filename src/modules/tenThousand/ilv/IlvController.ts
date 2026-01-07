import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilv")
export default class IlvController {
  @operation({
    summary: "Get Ilv",
  })
  @get()
  static getIlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilv",
  })
  @post("{id}")
  static createIlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
