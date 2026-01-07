import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kio")
export default class KioController {
  @operation({
    summary: "Get Kio",
  })
  @get()
  static getKio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kio",
  })
  @post("{id}")
  static createKio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
