import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knv")
export default class KnvController {
  @operation({
    summary: "Get Knv",
  })
  @get()
  static getKnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knv",
  })
  @post("{id}")
  static createKnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
