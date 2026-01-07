import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpr")
export default class KprController {
  @operation({
    summary: "Get Kpr",
  })
  @get()
  static getKpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpr",
  })
  @post("{id}")
  static createKpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
