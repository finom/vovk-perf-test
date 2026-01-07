import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewa")
export default class EwaController {
  @operation({
    summary: "Get Ewa",
  })
  @get()
  static getEwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewa",
  })
  @post("{id}")
  static createEwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
