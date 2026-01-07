import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehp")
export default class EhpController {
  @operation({
    summary: "Get Ehp",
  })
  @get()
  static getEhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehp",
  })
  @post("{id}")
  static createEhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
