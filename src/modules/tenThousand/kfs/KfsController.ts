import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfs")
export default class KfsController {
  @operation({
    summary: "Get Kfs",
  })
  @get()
  static getKfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfs",
  })
  @post("{id}")
  static createKfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
