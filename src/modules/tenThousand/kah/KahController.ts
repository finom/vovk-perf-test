import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kah")
export default class KahController {
  @operation({
    summary: "Get Kah",
  })
  @get()
  static getKah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kah",
  })
  @post("{id}")
  static createKah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
