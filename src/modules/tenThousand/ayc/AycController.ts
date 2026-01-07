import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayc")
export default class AycController {
  @operation({
    summary: "Get Ayc",
  })
  @get()
  static getAyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayc",
  })
  @post("{id}")
  static createAyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
