import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krj")
export default class KrjController {
  @operation({
    summary: "Get Krj",
  })
  @get()
  static getKrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krj",
  })
  @post("{id}")
  static createKrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
