import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehb")
export default class EhbController {
  @operation({
    summary: "Get Ehb",
  })
  @get()
  static getEhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehb",
  })
  @post("{id}")
  static createEhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
