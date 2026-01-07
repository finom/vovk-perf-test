import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auf")
export default class AufController {
  @operation({
    summary: "Get Auf",
  })
  @get()
  static getAuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auf",
  })
  @post("{id}")
  static createAuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
