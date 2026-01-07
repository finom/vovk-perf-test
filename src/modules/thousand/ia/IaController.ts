import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ia")
export default class IaController {
  @operation({
    summary: "Get Ia",
  })
  @get()
  static getIa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ia",
  })
  @post("{id}")
  static createIa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
