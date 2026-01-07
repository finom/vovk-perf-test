import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqt")
export default class AqtController {
  @operation({
    summary: "Get Aqt",
  })
  @get()
  static getAqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqt",
  })
  @post("{id}")
  static createAqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
