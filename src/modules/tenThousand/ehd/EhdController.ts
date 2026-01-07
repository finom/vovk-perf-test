import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehd")
export default class EhdController {
  @operation({
    summary: "Get Ehd",
  })
  @get()
  static getEhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehd",
  })
  @post("{id}")
  static createEhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
