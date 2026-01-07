import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdo")
export default class KdoController {
  @operation({
    summary: "Get Kdo",
  })
  @get()
  static getKdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdo",
  })
  @post("{id}")
  static createKdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
