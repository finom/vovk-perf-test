import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egh")
export default class EghController {
  @operation({
    summary: "Get Egh",
  })
  @get()
  static getEgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egh",
  })
  @post("{id}")
  static createEgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
