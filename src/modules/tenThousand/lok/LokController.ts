import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lok")
export default class LokController {
  @operation({
    summary: "Get Lok",
  })
  @get()
  static getLok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lok",
  })
  @post("{id}")
  static createLok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
