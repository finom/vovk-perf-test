import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eud")
export default class EudController {
  @operation({
    summary: "Get Eud",
  })
  @get()
  static getEud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eud",
  })
  @post("{id}")
  static createEud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
