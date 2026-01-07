import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqt")
export default class CqtController {
  @operation({
    summary: "Get Cqt",
  })
  @get()
  static getCqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqt",
  })
  @post("{id}")
  static createCqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
