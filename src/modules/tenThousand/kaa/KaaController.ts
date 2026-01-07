import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaa")
export default class KaaController {
  @operation({
    summary: "Get Kaa",
  })
  @get()
  static getKaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaa",
  })
  @post("{id}")
  static createKaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
