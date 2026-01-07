import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqt")
export default class HqtController {
  @operation({
    summary: "Get Hqt",
  })
  @get()
  static getHqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqt",
  })
  @post("{id}")
  static createHqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
