import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agm")
export default class AgmController {
  @operation({
    summary: "Get Agm",
  })
  @get()
  static getAgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agm",
  })
  @post("{id}")
  static createAgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
