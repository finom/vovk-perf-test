import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kut")
export default class KutController {
  @operation({
    summary: "Get Kut",
  })
  @get()
  static getKut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kut",
  })
  @post("{id}")
  static createKut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
