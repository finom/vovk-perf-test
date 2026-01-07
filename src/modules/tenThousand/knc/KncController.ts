import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knc")
export default class KncController {
  @operation({
    summary: "Get Knc",
  })
  @get()
  static getKnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knc",
  })
  @post("{id}")
  static createKnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
