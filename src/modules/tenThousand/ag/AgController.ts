import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ag")
export default class AgController {
  @operation({
    summary: "Get Ag",
  })
  @get()
  static getAg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ag",
  })
  @post("{id}")
  static createAg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
