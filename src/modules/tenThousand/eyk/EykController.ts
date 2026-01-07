import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyk")
export default class EykController {
  @operation({
    summary: "Get Eyk",
  })
  @get()
  static getEyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyk",
  })
  @post("{id}")
  static createEyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
