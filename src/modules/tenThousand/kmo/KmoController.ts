import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmo")
export default class KmoController {
  @operation({
    summary: "Get Kmo",
  })
  @get()
  static getKmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmo",
  })
  @post("{id}")
  static createKmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
