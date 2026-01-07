import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoy")
export default class EoyController {
  @operation({
    summary: "Get Eoy",
  })
  @get()
  static getEoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoy",
  })
  @post("{id}")
  static createEoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
