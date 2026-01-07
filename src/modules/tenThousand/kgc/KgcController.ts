import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgc")
export default class KgcController {
  @operation({
    summary: "Get Kgc",
  })
  @get()
  static getKgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgc",
  })
  @post("{id}")
  static createKgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
