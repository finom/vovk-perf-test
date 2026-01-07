import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxa")
export default class KxaController {
  @operation({
    summary: "Get Kxa",
  })
  @get()
  static getKxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxa",
  })
  @post("{id}")
  static createKxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
