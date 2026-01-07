import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxx")
export default class KxxController {
  @operation({
    summary: "Get Kxx",
  })
  @get()
  static getKxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxx",
  })
  @post("{id}")
  static createKxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
