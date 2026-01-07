import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ics")
export default class IcsController {
  @operation({
    summary: "Get Ics",
  })
  @get()
  static getIcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ics",
  })
  @post("{id}")
  static createIcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
