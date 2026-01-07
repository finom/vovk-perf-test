import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqt")
export default class LqtController {
  @operation({
    summary: "Get Lqt",
  })
  @get()
  static getLqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqt",
  })
  @post("{id}")
  static createLqt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
