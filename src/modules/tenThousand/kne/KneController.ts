import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kne")
export default class KneController {
  @operation({
    summary: "Get Kne",
  })
  @get()
  static getKne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kne",
  })
  @post("{id}")
  static createKne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
