import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kma")
export default class KmaController {
  @operation({
    summary: "Get Kma",
  })
  @get()
  static getKma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kma",
  })
  @post("{id}")
  static createKma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
