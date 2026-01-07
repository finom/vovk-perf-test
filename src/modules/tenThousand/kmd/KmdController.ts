import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmd")
export default class KmdController {
  @operation({
    summary: "Get Kmd",
  })
  @get()
  static getKmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmd",
  })
  @post("{id}")
  static createKmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
