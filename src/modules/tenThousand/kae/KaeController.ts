import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kae")
export default class KaeController {
  @operation({
    summary: "Get Kae",
  })
  @get()
  static getKae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kae",
  })
  @post("{id}")
  static createKae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
