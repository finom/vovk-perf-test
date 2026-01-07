import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apw")
export default class ApwController {
  @operation({
    summary: "Get Apw",
  })
  @get()
  static getApw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apw",
  })
  @post("{id}")
  static createApw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
