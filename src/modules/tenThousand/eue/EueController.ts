import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eue")
export default class EueController {
  @operation({
    summary: "Get Eue",
  })
  @get()
  static getEue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eue",
  })
  @post("{id}")
  static createEue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
