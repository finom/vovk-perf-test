import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luf")
export default class LufController {
  @operation({
    summary: "Get Luf",
  })
  @get()
  static getLuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luf",
  })
  @post("{id}")
  static createLuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
