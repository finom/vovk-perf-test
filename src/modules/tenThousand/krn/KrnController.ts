import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krn")
export default class KrnController {
  @operation({
    summary: "Get Krn",
  })
  @get()
  static getKrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krn",
  })
  @post("{id}")
  static createKrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
