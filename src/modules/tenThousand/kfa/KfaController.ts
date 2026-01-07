import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfa")
export default class KfaController {
  @operation({
    summary: "Get Kfa",
  })
  @get()
  static getKfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfa",
  })
  @post("{id}")
  static createKfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
