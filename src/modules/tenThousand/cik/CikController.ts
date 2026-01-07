import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cik")
export default class CikController {
  @operation({
    summary: "Get Cik",
  })
  @get()
  static getCik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cik",
  })
  @post("{id}")
  static createCik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
