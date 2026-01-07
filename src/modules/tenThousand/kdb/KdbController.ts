import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdb")
export default class KdbController {
  @operation({
    summary: "Get Kdb",
  })
  @get()
  static getKdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdb",
  })
  @post("{id}")
  static createKdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
