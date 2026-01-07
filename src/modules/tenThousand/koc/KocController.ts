import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koc")
export default class KocController {
  @operation({
    summary: "Get Koc",
  })
  @get()
  static getKoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koc",
  })
  @post("{id}")
  static createKoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
