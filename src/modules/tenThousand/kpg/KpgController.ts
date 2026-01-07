import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpg")
export default class KpgController {
  @operation({
    summary: "Get Kpg",
  })
  @get()
  static getKpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpg",
  })
  @post("{id}")
  static createKpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
