import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiw")
export default class KiwController {
  @operation({
    summary: "Get Kiw",
  })
  @get()
  static getKiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kiw",
  })
  @post("{id}")
  static createKiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
