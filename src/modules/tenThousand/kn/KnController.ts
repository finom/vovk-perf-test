import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kn")
export default class KnController {
  @operation({
    summary: "Get Kn",
  })
  @get()
  static getKn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kn",
  })
  @post("{id}")
  static createKn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
