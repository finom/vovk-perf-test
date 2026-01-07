import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqt")
export default class IqtController {
  @operation({
    summary: "Get Iqt",
  })
  @get()
  static getIqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqt",
  })
  @post("{id}")
  static createIqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
