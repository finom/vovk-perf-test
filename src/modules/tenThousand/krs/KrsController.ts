import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krs")
export default class KrsController {
  @operation({
    summary: "Get Krs",
  })
  @get()
  static getKrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krs",
  })
  @post("{id}")
  static createKrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
