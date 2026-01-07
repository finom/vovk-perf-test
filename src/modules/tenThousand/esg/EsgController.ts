import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esg")
export default class EsgController {
  @operation({
    summary: "Get Esg",
  })
  @get()
  static getEsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esg",
  })
  @post("{id}")
  static createEsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
