import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kti")
export default class KtiController {
  @operation({
    summary: "Get Kti",
  })
  @get()
  static getKti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kti",
  })
  @post("{id}")
  static createKti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
