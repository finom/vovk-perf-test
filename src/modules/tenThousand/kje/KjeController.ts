import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kje")
export default class KjeController {
  @operation({
    summary: "Get Kje",
  })
  @get()
  static getKje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kje",
  })
  @post("{id}")
  static createKje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
