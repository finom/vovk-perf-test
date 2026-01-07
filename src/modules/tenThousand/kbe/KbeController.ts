import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbe")
export default class KbeController {
  @operation({
    summary: "Get Kbe",
  })
  @get()
  static getKbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbe",
  })
  @post("{id}")
  static createKbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
