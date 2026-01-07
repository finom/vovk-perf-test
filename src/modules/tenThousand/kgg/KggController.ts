import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgg")
export default class KggController {
  @operation({
    summary: "Get Kgg",
  })
  @get()
  static getKgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgg",
  })
  @post("{id}")
  static createKgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
