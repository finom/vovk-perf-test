import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqt")
export default class DqtController {
  @operation({
    summary: "Get Dqt",
  })
  @get()
  static getDqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqt",
  })
  @post("{id}")
  static createDqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
