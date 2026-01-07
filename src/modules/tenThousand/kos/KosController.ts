import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kos")
export default class KosController {
  @operation({
    summary: "Get Kos",
  })
  @get()
  static getKos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kos",
  })
  @post("{id}")
  static createKos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
