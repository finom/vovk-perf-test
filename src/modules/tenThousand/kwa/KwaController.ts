import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwa")
export default class KwaController {
  @operation({
    summary: "Get Kwa",
  })
  @get()
  static getKwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwa",
  })
  @post("{id}")
  static createKwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
