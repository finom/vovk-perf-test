import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqt")
export default class KqtController {
  @operation({
    summary: "Get Kqt",
  })
  @get()
  static getKqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqt",
  })
  @post("{id}")
  static createKqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
