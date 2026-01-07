import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lej")
export default class LejController {
  @operation({
    summary: "Get Lej",
  })
  @get()
  static getLej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lej",
  })
  @post("{id}")
  static createLej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
