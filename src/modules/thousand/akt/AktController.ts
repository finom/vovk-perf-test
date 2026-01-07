import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akt")
export default class AktController {
  @operation({
    summary: "Get Akt",
  })
  @get()
  static getAkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akt",
  })
  @post("{id}")
  static createAkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
